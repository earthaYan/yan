<template>
    <el-form ref="registerForm" :model="registerUserT" :rules="registerRulesT" label-width="100px" class="registerForm sign-up-form">
        <el-form-item label="用户名" prop="name">
            <el-input v-model="registerUserT.name"  placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="registerUserT.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
                <el-form-item label="密码" prop="password">
            <el-input v-model="registerUserT.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
            <el-input v-model="registerUserT.password2" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="选择身份" prop="role">
        <el-select placeholder="请选择身份" v-model="registerUserT.role">
            <el-option label="管理员" value="admin">管理员</el-option>
            <el-option label="用户" value="user">用户</el-option>
            <el-option label="游客" value="guest">游客</el-option>
        </el-select>
        </el-form-item>
        <el-form-item>
            <el-button @click="handleRegister('registerForm')" type="primary" class="submit-btn">注册</el-button>
        </el-form-item>
    </el-form>  
</template>
<script lang="ts">
import {defineComponent,getCurrentInstance} from 'vue'
import { useRouter } from "vue-router";
export default defineComponent({
    name:'RegisterForm',
    props:{
        registerUser:{
            type:Object,
            required:true
        },
        registerRules:{
            type:Object,
            required:true
        }
    },
    setup(props: any){
        // @ts-ignore 忽略系统提供的方法返回类型
        const {ctx}=getCurrentInstance()
        const router=useRouter()
        const registerUserT=ctx.registerUser
        const registerRulesT=ctx.registerRules
        const handleRegister=(formName: string)=>{
            console.log(formName)
            ctx.$refs[formName].validate((valid: boolean)=>{
                if(valid){ 
                    ctx.$axios.post('/api/v1/auth/register',props.registerUser).then((res: any) => {
                        ctx.$message({
                            message:"注册成功",
                            type:'success'
                        })
                        router.push('/')
                    }).catch((error: any)=>{
                        ctx.$message({
                            message:error.message,
                            type:'error'
                        })
                    })
                }else{
                    ctx.$message({
                        message:'注册失败',
                        type:'error'
                    })
                    return false
                }
            })
        }
        return {
            registerUserT,
            registerRulesT,
            handleRegister
        }
    }
})
</script>