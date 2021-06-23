<template>
  <div style="background: white;padding: 20px 20px 40px 20px" >
    <!--导航-->
    <!--导航-->
    <a-row>
      <a-col :span="12">
        <p>  <b style="font-size: 18px;">编辑虚拟货架</b></p>
      </a-col>
      <a-col :span="12">
        <router-link to='/edu/bb'>
          <a-button  style="float: right">返回</a-button>
        </router-link>

      </a-col>
    </a-row>
    <!--搜索-->
    <a-row>
      <a-col :span="8">
        <b style="color: red">&lowast;</b>虚拟货架名称 &nbsp;<a-input style="width: 70%" v-model="goodWayName"   placeholder="虚拟货架名称" />
      </a-col>
      <a-col :span="8">
      <!--  备注 &nbsp;<a-input style="width: 70%" placeholder="" />-->
      </a-col>
      <a-col :span="8">
       <!-- 自动轮播时间 &nbsp;  <a-switch @change="onChange" checked-children="开" un-checked-children="关" />
        <p style="color: #999999;font-size: 12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是否开启商品页面的自动轮播功能</p>-->
      </a-col>
    </a-row>
    <!--去处理-->
    <!--
    <a-alert  message="您有7个商品没有在屏幕上放置，将无法售卖，请尽快在虚拟货架添加!" type="error" close-text="去处理" banner />
-->
    <!--全局温度管理-->
    <a-row style="margin: 20px">
      <a-col :span="3">
        <a-card title="全局温度管理" style="width: 100%">
          <!-- <a slot="extra" href="#">more</a>-->
          <a-button class="wenduBtn" @click="wendu(0)">常温</a-button><br />
          <a-button  class="wenduBtn" @click="wendu(1)">制冷</a-button><br />
          <a-button  class="wenduBtn" @click="wendu(2)">制热</a-button><br />
        </a-card>
      </a-col>
      <a-col :span="21">
        <a-card title="背景图" style="width: 98.5%;margin:0px 15px">
          <a-tabs type="card" @change="callback">
            <!--<el-image v-for=" item in urllist" :key="item.url" :src="require('D:/opt/upFiles/online'+item.url+'.png')" style="width: 100px;height:100px;display: block;margin-
              -->
            <a-tab-pane key="1" tab="默认">
             <!-- <img @click="huantu(0)"  :src="imgsrcbj">-->
              <img @click="huantu(91)" :src="require('@/views/edu/img/01.png')" class="huantus" >
              <img @click="huantu(92)" :src="require('@/views/edu/img/02.png')" class="huantus"  >
              <img @click="huantu(93)" :src="require('@/views/edu/img/03.png')" class="huantus"  >
            </a-tab-pane>
            <a-tab-pane key="2" tab="节日">
              <img @click="huantu(11)" :src="require('@/views/edu/img/11.png')" class="huantus"  >
              <img @click="huantu(12)" :src="require('@/views/edu/img/12.png')" class="huantus" >
              <img @click="huantu(13)" :src="require('@/views/edu/img/13.png')" class="huantus" >
              <img @click="huantu(14)" :src="require('@/views/edu/img/14.png')" class="huantus" >
              <img @click="huantu(15)" :src="require('@/views/edu/img/15.png')" class="huantus" >
              <img @click="huantu(16)" :src="require('@/views/edu/img/16.png')" class="huantus" >
            </a-tab-pane>
            <a-tab-pane key="3" tab="节气">
              <img @click="huantu(21)" :src="require('@/views/edu/img/21.png')" class="huantus" >
            </a-tab-pane>
            <a-tab-pane key="4" tab="品牌">
              <img @click="huantu(31)" :src="require('@/views/edu/img/31.png')" class="huantus" >
              <img @click="huantu(32)" :src="require('@/views/edu/img/32.png')" class="huantus" >
            </a-tab-pane>
            <a-tab-pane key="5" tab="炫彩">
              <img @click="huantu(41)" :src="require('@/views/edu/img/41.png')" class="huantus" >
            </a-tab-pane>
            <a-tab-pane key="6" tab="拟物">

            </a-tab-pane>
            <a-tab-pane key="7" tab="清新">

            </a-tab-pane>
            <a-tab-pane key="8" tab="其他">

            </a-tab-pane>
          </a-tabs>
        </a-card>
      </a-col>
     <!-- <a-col :span="4">
        <div style="width: 100%;height: 260px;border: 1px solid #FFC629;background: #FFFCF5; padding: 20px">
          <p><b>自动生成虚拟货架</b></p>
          <a-switch  checked-children="开" un-checked-children="关" />
          <p style="color: #747373;font-size: 12px;margin-top: 20px">开启后设备会根据货道配置的商品，自动生成虚拟货架机</p>
        </div>
      </a-col>-->
    </a-row>
    <a-row style="margin: 20px">
      <a-col :span="19" style="padding-right: 10px" >
        <div :style="{ backgroundImage:'url('+require('@/views/edu/img/'+bj)+')',
              backgroundRepeat:'no-repeat',
          backgroundSize:'100% 100%',}" style="width: 100%;height: 640px; border-top-right-radius: 4px; border-top-left-radius: 4px; background: #9e9e9e;padding: 3px">
          <p style="padding-left: 40px; padding-top: 10px;color:#FCBE26">饮料温度&nbsp;{{this.wenDu}}</p>
          <draggable
            :list="list3"
            group="peoples"
             @change="log"
            @start="onStart"
            @end="onEnd"
            v-for="(item,inde) in list3"
            :key="inde"
            style=" margin-bottom:10px;margin-left:1%"
          >
            <draggable
              :list="list3[inde]"
              group="people"
              @change="log"
              @start="onStart"
              @end="onEnd"
              style="display: inline-block;height: 205px;width: 100%;margin-bottom:1px;"

            >
<!--  style="width: 100px;height: 100px;margin: 8px;" height: 50px;width: 30px;            -->
              <div
                style="display: inline-block"
                v-for="(item,index) in list3[inde]"
                :key="index"
                v-bind:class="{itemone:item.hidden==1,itemtwo:item.hidden==2,itemthree:item.hidden==3}">
<!--                <img :src="'../jeecg-boot/sys/common/static/'+item.picture"  style="height: 70%;width: 70%;  backgroundRepeat:'no-repeat';backgroundSize:'100% 100%'"  alt="图片" />-->
                <img :src="'http://localhost:8080/jeecg-boot/sys/common/static/'+item.picture"  style="height: 70%;width: 70%;  backgroundRepeat:'no-repeat';backgroundSize:'100% 100%'"  alt="图片" />
                <a-button  style="text-align: center;font-size: 6px;width: 100%;height: 20px;margin-top: 40px"  @click="shanchu(inde,index)">删除</a-button>
              </div>

          </draggable>
          </draggable>
         <p>{{this.results}}</p>
          <!--双货道货道-->
        </div>
        <div style="width: 100%;height: 74px;background: #32302C; border-bottom-left-radius: 4px;border-bottom-right-radius: 4px"></div>
<a-row style="margin: 10px">

  <a-col :span="24" style="text-align: center;" >
    <router-link to='/edu/bb'>
      <a-button>返回</a-button>
    </router-link>
   <!-- <router-link to='/edu/bb'>-->
    <a-button type="primary" @click="bctp" style="margin-left: 10px">保存</a-button>
  <!--  </router-link>-->
  </a-col>
</a-row>


      </a-col>
      <a-col :span="5" style="padding-left: 10px">
        <div  style="background: #E7E7E7; border-top-right-radius: 4px; border-top-left-radius: 4px;  width: 100%;height: 60px;border: 1px solid #b8b8b8;"></div>
        <!--width: 100%;height: 570px; -->
        <div style="width: 100%;height: 655px; border-bottom-right-radius: 4px; border-bottom-left-radius: 4px; border: 1px solid #b8b8b8;overflow-y: scroll">
<!--          <h3>货源{{drag?'拖拽中':'拖拽停止'}}</h3>-->

          <draggable
            :list="list1"
            :group="{ name: 'people', pull: 'clone', put: false }"
            @change="log"
            @start="onStart"
            @end="onEnd"

          >

            <div
              style="display: inline-block"
              class="list-group-item"
              v-for="item in list1"
              :key="item.picture"
            >
              <div style="background: white;border: 1px solid #b8b8b8;margin: 10px;border-radius: 5px;width: 130px">
<!--                <img :src="'../jeecg-boot/sys/common/static/'+item.picture" class="item" style="width: 100px;height: 100px;margin: 8px;" alt="图片" />
http://localhost:8080/jeecg-boot/sys/common/static/online\image117484631.PNG
-->
                <img :src="'http://localhost:8080/jeecg-boot/sys/common/static/'+item.picture" class="item" style="width: 100px;height: 100px;margin: 8px;" alt="图片" />
                <!---->
                <p  class="tmp" style=" text-align: center;background: white;font-size: 3px;">{{item.name}}</p>
              </div>
            </div>
          </draggable>
<!--src="'../jeecg-boot/sys/common/static/'+item.picture"  -->

        </div>
      </a-col>
    </a-row>
<!---->
  </div>
</template>

<script>

  import draggable from "vuedraggable"
  import { deleteAction, getAction,putAction,postAction,httpAction } from '../../api/manage'
  export default {
    name: 'aa',
    display: "Clone",
    order: 2,
 /*   drag: false,*/

    components: {
      draggable
    },
    data(){
      return{
        msg:'90',
        results:'',
        hidden:'0',
        index:'',
        inde:'',
        goodWayName:'asf',
        wenDu:'热',
        bj:'03.png',
      id:'473486c52f9d3cd9f12e8ab253264662',
     /*id:"",*/
        /*id:'95',*/
        zongChaXunUrl:"/editgoodsway/querybyid",
        baochunUrl:"/editgoodsway/editgoodwaybyid",
        bgimg:{
          backgroundImage:'url('+require('@/assets/img/bj.png')+')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'100% 100%',
        },
        list1: [
         /* { name: "旺仔QQ糖",  px:2,id: 1,img: {image:require("@/assets/img/naitnag.png")} },
          { name: "老谭酸菜",  px:3,id: 3 ,img:{image:require("@/assets/img/laotan.png")},},*/

        ],
        list3: [],




      }; },
    created() {

     this.id = this.$route.query.id;
      this.loadData()

    },
    mounted: function() {

     /* this.$route.go(0);*/
      this.loadData()

    },
    updated: function() {
    /*  this.loadData();*/
     /* this.$message.error('!！');*/

    },
    methods:{
      watch: { $route (to, from) { this.$router.go(0) } },
      /*切换温度*/
      wendu:function(e){
      if(e==0){
        this.wenDu='常温'
      }else if(e==1){
        this.wenDu='冷'
        }else {
        this.wenDu='热'
      }
      },

      /*刷新按钮*/
      shuaxin:function(e){
        this.$router.go(0);
        /* reload();*/
        this.loadData();
        console.log(e);
      },
      /*换背景图*/
      huantu:function(e){
        if (e==91){
          this.bj='01.png';
        }else if(e==92){
          this.bj='02.png';
        }else if(e==93){
          this.bj='03.png';
        }else if(e==11){
          this.bj='11.png';
        }else if(e==12){
          this.bj='12.png';
        }else if(e==13){
          this.bj='13.png';
        }else if(e==14){
          this.bj='14.png';
        }else if(e==15){
          this.bj='15.png';
        }else if(e==16){
          this.bj='16.png';
        }else if(e==21){
          this.bj='21.png';
        }else if(e==22){
          this.bj='22.png';
        }else if(e==31){
          this.bj='31.png';
        }else if(e==32){
          this.bj='32.png';
        }else {
          this.bj='41.png';
        }
      },
      /*加载拿数据*/
      loadData(){
        getAction(this.zongChaXunUrl,{id:this.id}).then((res)=>{
          if(res.success){
            this.list3 = res.result.goodWayList;
            this.list1 = res.result.goodList;
            this.wenDu=res.result.temperature;
            this.bj=res.result.imgsrc
            this.goodWayName=res.result.goodWayName;
            this.$message.success('货架加载成功！');

          }else{
            this.$message.error('货架加载失败，请检查网络设置！');
          }
        })
          },
      /*保存*/
      bctp:function(e){
        /*  var  goodWayList={id:this.id,goodWayName:this.goodWayName,imgsrc:this.bj,temperature:this.wenDu};
  postAction(this.baochunUrl,{editGoodWay:goodWayList,jsonStr:JSON.stringify(this.list3)}).then((res)=>{*/
        postAction(this.baochunUrl,{id:this.id,goodWayName:this.goodWayName,imgsrc:this.bj,temperature:this.wenDu,jsonStr:JSON.stringify(this.list3)}).then((res)=>{
if(res.success){
  this.$message.success('货架保存成功！');
}else {
  this.$message.error('货架保存失败，请检查网络设置！');
}
        })
      },
      /*删除*/
      danshanchu(e){
        console.log(e);
        /*  this.list2.splice(evt.added.newIndex+1,1)*/
        this.list2.splice(e,1)
      },
      shanchu(e,x){
        this.inde=e;
        this.index=x;
      /*  this.list2.splice(evt.added.newIndex+1,1)*/
        this.list3[e].splice(x,1);
        console.log(this.list3[e])
  },
      /*自动轮播时间*/
      onChange(checked) {
        console.log(`a-switch to ${checked}`);
      },
      /*卡片图*/
      callback(key) {
        console.log(key);
      },
      /*托图*/
      log: function(evt) {
        window.console.log('evt',evt);
        /* this.list2.splice(evt.added.newIndex+1,1)*/
        /* alert("123");*/
        console.log()
      },

      onStart(e) {
      },
      onEnd(e) {
        console.log('e',e);
        console.log('e',e.newIndex);
        console.log('e',res);
        console.log('e',this.list1[e.newIndex].hidden);
        for(let j=0; j<this.list3.length; j++ )
        {var  res = 0;
        for(let i=0; i<this.list3[j].length; i++) {
           res=res+Number(this.list3[j][i].hidden)
          if(res>14){
            /*if(res>14&&this.list3[j][i].hidden!=1){
              this.$message.error('此行货架只剩下一个空位，放不下此商品，请选择货架的未满行放！');
            }*/
           this.list3[j].splice(e.newIndex,1)
            this.$message.error('此行货架放不下此商品，请选择货架的未满行放！');
          }else {

          }
        }
        }

      },



    },


    /*computed:{
      haha:function () {
        for (let j=1; j<this.list3.length; j++){
           var result = 0;
        for(let item in this.list3[0]){
           result=item.hidden;
        }
          return result;
        }

      }
    }*/

  }
</script>

<style scoped>
  /*全局温度管理*/
  .wenduBtn{
    /*color: #FFC629;*/
    color:#737373 ;
    font-size: 14px;
    background: #FFFFFF;
    margin: 0px 24px 12px;
    padding: 8px 0px;
    width: 100px;
    height: 40px;
  }
  .wenduBtn:hover{
    border-color: #FFC629;
  }
  .wenduBtn{
    outline: #FFC629;
  }
  /*托图*/
  .col-3Left{
    width: 30%;
    height: 500px;
    background: white;
    float: left;
  }
  .col-3Right{
    width: 30%;
    height: 500px;
    background: white;
    float: right;
  }
  /*.itemone {
    style="width: 55px;height: 80px;margin: 5px"
    height: 80px;
    width: 55px;
    padding: 6px 10px;
    margin: 0px 10px 0px 10px;
    border: solid 1px #eee;
  }
   width: 57px; width: 140px;
  */
  .itemone {
   height: 70px;
   width: 5%;
    margin: 145px 1.045% 20px;
    text-align: center;

 }
  /*
  线上
  .itemtwo {
    height: 60px;
    width: 12.21%;
    margin: 145px 1%  20px;
    text-align: center;
  }*/
  .itemtwo {
    padding-top: 0px;
    height: 100px;
    width: 12.21%;
    margin: 145px 1%  20px;
    text-align: center;
  }
  .itemthree {
    height: 80px;
    width: 155px;
    margin: 145px 20px 20px;
    text-align: center;
  }

  .itemone:hover {
/*    575654*/
    background-color: #f1f1f1;
    cursor: move;
    filter:alpha(opacity=60);-moz-opacity:0.6;opacity:0.60;
  }
  .itemtwo:hover {
    background-color: #f1f1f1;
    cursor: move;
    filter:alpha(opacity=60);-moz-opacity:0.6;opacity:0.60;
  }
  .itemthree:hover {
    background-color: #f1f1f1;
    cursor: move;
    filter:alpha(opacity=60);-moz-opacity:0.6;opacity:0.60;
  }

  .item + .item {
    border-top: none;
  }
  .huantus{
    width: 100px;height: 75px;margin: 10px
  }
  .huantus:hover{
    width: 110px;height: 84px;margin: 5px 5px
  }
  /*省略*/
  .tmp:after{
    content: "...";
  }

</style>