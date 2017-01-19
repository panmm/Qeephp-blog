/**
 * Created by Administrator on 2016/12/15 0015.
 */
/// <reference path="../lib/node_modules/@types/jquery/index.d.ts" />
/// <reference path="../lib/node_modules/@types/jquery.validation/index.d.ts" />
/// <reference path="../lib/node_modules/@types/bootstrap/index.d.ts" />
//    前台登入验证
namespace App
{
    export class blog
    {
        private dom:JQuery;
        constructor(dom:string)
        {
            this.dom = $('.'+dom);
        }
        public tooltip():void
        {
            $('[data-toggle="tooltip"]').tooltip();
        }
    //    验证登入是否合法
        public validationLogin():void
        {
            //添加验证方法
            $.validator.addMethod('checkpassword',(value:any)=>{
                return /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W)[a-zA-Z\d\W]{8,}$/.test(value);
            },"密码强度不够。必须8位以上,包含至少一个大写字符和一个特殊字符");
            $(this.dom).validate({
                rules:{
                    password:'checkpassword',
                    name:{
                        required: true,
                        minlength: 2
                    },
                    username:{
                        required: true,
                        email: true
                    },
                    email:{
                        required: true,
                        email: true
                    },
                    confirm_password:{
                        equalTo: '#password'
                    }
                },
                messages:{
                    name:"名字长度最少两个字符",
                    username:"请输入正确的邮箱地址",
                    email:"请输入正确的邮箱地址",
                    confirm_password:{
                        equalTo:"两次输入的密码不一致"
                    }
                },
                submitHandler: function (form:any) {
                    form.submit();

                }
            },);


        }
    }
}
$(document).ready(()=>{
    const app = new App.blog("submit-login");
    app.tooltip();
    app.validationLogin();
});