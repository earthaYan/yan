<template>
    <div class="container">
        <!-- 表单容器 -->
        <div class="form-container">
            <div class="sign">
                <!-- 登录 -->
                <div>登录</div>
                <!-- 注册 -->
                <div>注册</div>
            </div>  
        </div>
        <div>
          <!-- 左右切换动画 -->
          <div class="panels-container">
            <div class="panel panel-left">
              <div class="content">
                <h3></h3>
              </div>
            </div>
            <div class="panel panel-right">
              <div class="content">
                <h3>业精于勤荒于嬉,行成于思毁于随</h3>
                <p>何以解忧，唯有杜康</p>
                <button class="btn transoarent">注册</button>
              </div>
              <!-- <img src="@/assets/log.svg" class="image" alt=""> -->

            </div>
          </div>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name:'Login',
    components:{

    }
})
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
}
.form-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.sign {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 44%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}
</style>