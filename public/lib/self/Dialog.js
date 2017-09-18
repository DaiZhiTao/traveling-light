class Dialog{
  constructor (options){
    this.handleData(options);
  }


  handleData (data){
    // 弹出框的类型
    this.type = data.type;
    this.title = data.title;
  }
}
