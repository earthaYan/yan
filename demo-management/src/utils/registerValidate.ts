import {ref} from 'vue'
interface RegisterUser{
    name: string;
    email: string;
    password: string;
    password2: string;
    role: string;
}
export const registerUser=ref<RegisterUser>({
    name:"",
    email:"",
    password:"",
    password2:"",
    role:""
})

interface RegisterRules {
    name: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
    email: ({
        type: string;
        message: string;
        required: boolean;
        trigger: string;
    })[];
    password: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
    password2: ({
        required: boolean;
        message: string;
        trigger: string;
    } |  {
        min: number;
        max: number;
        message: string;
        trigger: string;
    } | {
        validator: (rules: RegisterRules,value: string, callback: any) => void;
        trigger: string;
    })[];
}
const validatePass2 = (rule: RegisterRules, value: string, callback: any) => {
    if (value === '') {
      callback(new Error('请再次输入密码'));
    } else if (value !== registerUser.value.password) {
      callback(new Error('两次输入密码不一致!'));
    } else {
      callback();
    }
  };
export const registerRules=ref<RegisterRules>({
    name:[
      {required:true,message:'用户名不能为空',trigger:'blur'},
      {min:2,max:10,message:'长度在2-10之间',trigger:'blur'}
    ],
    email: [
      { type: 'email',message:'邮箱地址不合法',required:true, trigger: 'blur' }
    ],
    password2: [   
        { required:true, message:'确认密码不能为空', trigger: 'blur' },
        { min:6,max:30,message:'密码长度在6-30位之间',trigger:'blur'},
        { validator:validatePass2,trigger:"blur"}
      ],
    password: [
        { required:true, message:'密码不能为空', trigger: 'blur' },
        { min:6,max:30,message:'密码长度在6-30位之间',trigger:'blur'}
    ]
})