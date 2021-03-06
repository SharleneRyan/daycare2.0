const connection = require('./connection')
const {generatePasswordHash} = require('../auth/hash')

function getPendingChildren (id, db = connection) {
    console.log(id)
    return db('ecc').where('ecc.id', id)
    .join('waitlist', 'waitlist.ecc_id', '=', 'ecc.id')
        .join('child', 'child_id', '=', 'child.id')
        .where('waitlist.status', 'pending')
        .join('parent','parent_id', '=', 'parent.id')
        .select('ecc.center_name', 'waitlist.child_id', 'waitlist.ecc_id',  'waitlist.status as child_status', 'waitlist.rank_ecc as child_rank', 'child.first_name as child_first_name', 'child.last_name as child_last_name', 'parent.first_name as parent_first_name', 'parent.last_name as parent_last_name', 'parent.email as parent_email')
}
function getWaitlistChildren (id, db = connection) {
    return db('ecc').where('ecc.id', id)
        .join('waitlist', 'ecc.id', '=', 'waitlist.ecc_id')
        .join('child', 'child_id', '=', 'child.id')
        .where('waitlist.status', 'waitlist')
        .join('parent','parent_id', '=', 'parent.id')
        .select('ecc.center_name', 'waitlist.child_id', 'waitlist.ecc_id', 'waitlist.status as child_status', 'waitlist.rank_ecc as child_rank', 'child.first_name as child_first_name', 'child.last_name as child_last_name', 'parent.first_name as parent_first_name', 'parent.last_name as parent_last_name', 'parent.email as parent_email')
}

function updateChildStatusToWaitlist (childId, db = connection) {
    return db('waitlist')
      .where('child_id', childId)
      .update({ status: 'waitlist' })
      //get child result
      //
  }

function deleteChildFromWaitlist (childId, eccId, db = connection) {
    return db('waitlist')
    .where('child_id', childId).andWhere('ecc_id', eccId)
    .del()
}

//auth
function createEccUser (newEccUser, db = connection) {
    return generatePasswordHash(newEccUser.hash_password)
    .then (hash => {
        return db('ecc')
        .insert({
            'center_name': newEccUser.center_name,
            'ph_number': newEccUser.ph_number,
            'url': newEccUser.url,
            'email': newEccUser.email,
            'address': newEccUser.address,
            'suburb': newEccUser.suburb,
            'description': newEccUser.description,
            'age': newEccUser.age,
            'photo': newEccUser.photo,
            'username': newEccUser.username,
            'hash_password': hash,

        })
    })
}

function getEccByUsername (eccUsername, db = connection) {
    return db('ecc')
      .where('username', eccUsername)
      .select()
      .first()
  }

function EccUserExists (ecc, db = connection) {
    console.log(ecc)
    return db('ecc')
      .where('username', ecc.username)
      .then(eccUsers => eccUsers.length > 0)
}
//   function updateEccUser (updateEccUser, db = connection) {
//         return db('ecc')
//         .update({
//             'center_name': updateEccUser.center_name,
//             'ph_number': updateEccUser.ph_number,
//             'url': updateEccUser.url,
//             'email': updateEccUser.email,
//             'address': updateEccUser.address,
//             'suburb': updateEccUser.suburb,
//             'description': updateEccUser.description,
//             'age': updateEccUser.age,
//             'photo': updateEccUser.photo,
//             'username': updateEccUser.username,
//             'hash_password': updateEccUser.hash_password,

//         })
// }

module.exports = {
    getPendingChildren,
    getWaitlistChildren,
    getEccByUsername,
    createEccUser,
    EccUserExists,
    updateChildStatusToWaitlist,
    deleteChildFromWaitlist
}