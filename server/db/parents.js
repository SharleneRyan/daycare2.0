const connection = require('./connection')

function getEccList (db = connection) {
    return db('ecc').select()
}

function createChild (newChildInfo, db = connection) {
    console.log('newChildInfo: ', newChildInfo) 
    return db('child')
        .insert(newChildInfo)
}

function deleteChild (id, db = connection) {
    return db('waitlist')
    .where('child_id', id)
    .del()
}
// rank_parent is easily changed, need to make unique
function getChildWaitlists (id, db = connection) {
    return db('parent').where('parent.id', id)
    .join('child', 'parent.id', '=', 'parent_id')
    .join('waitlist', 'child_id', '=', 'waitlist.child_id')
    .join('ecc', 'ecc_id', '=', 'ecc.id')
    .select('child.first_name', 'waitlist.status', 'waitlist.rank_ecc', 'waitlist.rank_parent', 'ecc.center_name')
    
}
module.exports = {
    getEccList,
    createChild,
    deleteChild,
    getChildWaitlists
}