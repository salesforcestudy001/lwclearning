import { LightningElement } from 'lwc';
import templateOne from './templateOne.html';
import templateTwo from './templateTwo.html';
//↑将Html模板引入

export default class MiscMultipleTemplates extends LightningElement {
    templateOne = true;
    //render方法自动被框架调用
    render() {
        //templateOne为True的时候显示templateOne.html;否则显示templateTwo.html
        //templateOne.html模板显示的时候，使用templateOne.css。
        //templateTwo.html模板显示的时候，使用templateTwo.css。
        return this.templateOne ? templateOne : templateTwo;
    }
    switchTemplate(){ 
        this.templateOne = this.templateOne === true ? false : true; 
    }    
}