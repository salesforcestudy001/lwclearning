import { LightningElement, api } from 'lwc';

export default class HelloWorld extends LightningElement {
    //@api表示该属性是Public属性
    @api name;
}