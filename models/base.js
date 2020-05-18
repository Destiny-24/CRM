const knex = require('./knex');

class Base {
  constructor(props) {
    this.table = props;
  }

  all(){
    return knex(this.table).select()
  }
  //选择用户
  select(params) {
    return knex(this.table).select().where(params)
  }
  // 添加用户
  insert(params){
    return knex(this.table).insert( params )
  }
  // 修改用户
  update(id, params ){
    return knex(this.table).where('id', '=', id).update( params )
  }
  // 删除用户
  delete(id){
    return knex(this.table).where('id', '=', id).del()
  }
}

module.exports = Base;