<template>
<div>
  <div class="card flex" >
    <div class="avatar">
      <img src="@/assets/logo.png" />
    </div>
    <div class="info">
      <div class="name"><span class="left">姓名：</span>{{singer.name}}</div>
      <div class="alias"><span class="left">别名：</span>{{singer.alias}}</div>
      <div class="age"><span class="left">年龄：</span>{{singer.age}}</div>
      <div class="works" >
        <span class="left">作品：</span>
        <div>
          <span @click="handleSelect(song)" v-for="song in singer.works" :key="song">{{song}}&nbsp;</span>
        </div>
      </div>
    </div>
  </div>
  <div>{{selected}}</div>
  <button  @click="overAction">点餐完成</button>
  <div>{{overText}}</div>
  <div>
</template>

<script lang="ts">
import { defineComponent ,watch,onBeforeMount,onMounted,onRenderTracked,onRenderTriggered,reactive, toRefs,ref} from 'vue';
import {getDetailById} from '../utils/api/card'
interface DataProps{
  singer: {
    name?: string;
    age?: number;
    imgPath?: string;
    works?: string[];
    alias?: string;
    [propName: string]: any;
  };
  selected: string;
  getDetail: (id: number) => void;
  handleSelect: (song: string) => void;
}
export default defineComponent({
  name: 'HelloWorld',
  setup(){
    const data: DataProps= reactive({
      singer: {
      },
      selected:"",
      getDetail: (id: number)=>{
        const params={
          id:id
        }
        getDetailById(params).then(res =>{
          data.singer=res.data
          data.singer.alias="sundae"
        })
      },
      handleSelect: (song: string)=>{
        data.selected=song
      }
    })
    onBeforeMount(()=>{
      data.getDetail(2)
    })
    // 主要用来调试,组件没有更新，这个跟踪函数是不会执行的
    onRenderTracked((event)=>{
      // 跟踪页面上所有的响应式变量和方法的状态，只要在return里面都会跟踪
      console.log("状态跟踪钩子函数",event)
    })
    onRenderTriggered((event)=>{
      // 只跟踪一个值，只执行一次
      console.log("状态触发钩子函数",event)
    })
    const refData=toRefs(data)
    const  overText=ref("红浪漫")
    const overAction= ()=>{
      overText.value="点餐完成|"+overText.value
      // document.title=overText.value
    }
    watch([overText,()=>data.selected],(newVal,oldVal)=>{
      console.log(oldVal,'==>',newVal)
      document.title=newVal[0]
    })
    return {
     ...refData,
     overText,
     overAction
    }
  },

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flex{
  display: flex;
}
.card{
  width: 80%;
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 6px 6px 0px rgba(0,0,0,.2),
              0px -6px 6px 0px rgba(0,0,0,.2),
              6px 0px 6px 0px rgba(0,0,0,.2),
              -6px 0px 6px 0px rgba(0,0,0,.2);
  .avatar{
    width: 70px;
    height: 70px;
    
    img{
      width: 100%;
      height: 100%;
      border: 1px solid rgb(245, 19, 19);
      border-radius: 50%;
    }
  }
  .info{
    flex: 1;
    padding-left: 10px;
    text-align: left;
    .left{
      color: #999;
    }
  }
}
</style>
