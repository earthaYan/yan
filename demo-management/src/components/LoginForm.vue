<template>
    <el-form ref="loginForm" :model="loginUserT" :rules="rules" label-width="100px" class="loginForm sign-in-form">
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="loginUserT.email"  placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="loginUserT.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="handleLogin('loginForm')" type="primary" class="submit-btn">提交</el-button>
        </el-form-item>
        <!-- 找回密码 -->
        <div class="tiparea">
            <p>忘记密码?
                <a>立即找回</a>
            </p>
        </div>
    </el-form>
</template>
<script lang="ts">
import { loginUser } from '@/utils/loginValidate'
import {defineComponent,getCurrentInstance} from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
    name:'LoginForm',
    props:{
        loginUser:{
            type:Object,
            required:true
        },
        rules:{
            type:Object,
            required:true
        }
    },
    setup(props){
      // @ts-ignore 忽略系统提供的方法返回类型
      const {ctx}=getCurrentInstance()
      const router = useRouter()
    //   直接使用v-model也是一种运算,会报错Unexpected mutation of 'loginUser'  prop  
      const loginUserT=ctx.loginUser
      const rulesT=ctx.rules
      // 登录方法
      const handleLogin=(formName: string)=>{
        ctx.$refs[formName].validate((valid: boolean)=>{
          if(valid){
            ctx.$axios.post('/api/v1/auth/login',props.loginUser).then((res: any) =>{
              ctx.$message({
                  message:"登录成功",
                  type:'success'
              })
              // 登录成功，保存token
              const {token} = res.data
              localStorage.setItem('login_token',token)
              router.push('/')
            }).catch((error: any)=>{
              ctx.$message({
                message:error.message,
                type:'error'
              })
            })
          }else{
            ctx.$message({
              message:'登录失败',
              type:'error'
            })
            return false
          }
        })
      }
      return{
          loginUserT,
          rulesT,
          handleLogin
      }
    }
})
</script>
<style lang="scss" scoped>
/**
form样式
 */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>