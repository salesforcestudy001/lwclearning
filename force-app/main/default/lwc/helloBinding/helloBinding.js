import { LightningElement } from 'lwc';

export default class HelloBinding extends LightningElement {
    //属性的定义
    greeting ='World';

    //输入框的onchange事件处理方法
    handleChange(event){        
        //通过event.target.value得到输入的值，并将该值赋值到greeting属性
        this.greeting = event.target.value;
    }

}