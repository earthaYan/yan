import {ref} from 'vue'
interface User{
    email: string;
    password: string;
}
interface Rules{
    email: {
        type: string;
        message: string;
        required: boolean;
        trigger: string;
    }[];
    password: ({
        required: boolean;
        message: string;
        trigger: string;
        min?: undefined;
        max?: undefined;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
        required?: undefined;
    })[];
}
export const loginUser=ref<User>({
    email:'',
    password:''
})
// 校验规则
export const rules=ref({
  email: [
    { type: 'email',message:'邮箱地址不合法',required:true, trigger: 'blur' }
  ],
  password: [
    { required:true, message:'密码不能为空', trigger: 'blur' },
    { min:6,max:30,message:'密码长度在6-30位之间',trigger:'blur'}
  ]
})
