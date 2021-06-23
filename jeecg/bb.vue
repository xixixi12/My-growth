
<template>
  <div style="background: white;padding: 20px 20px 40px 20px" >
    <!--导航-->
    <b style="font-size: 18px;">虚拟货架管理</b>
    <a-row style="margin:20px 0 0 0">
      <a-col :span="16">
        <a-button @click="shuaxin()"  >刷新</a-button>
        <!-- <a-tabs type="card" @change="zongCallback">
           <a-tab-pane  key="1"  tab="全部">
             <div>
               <a-tabs type="card" @change="xiaochaxun">
                 <a-tab-pane  key="5"  tab="全部">
                 </a-tab-pane>
                 <a-tab-pane  key="6"  tab="全部">
                 </a-tab-pane>
                 <a-tab-pane  key="7"  tab="全部">
                 </a-tab-pane>

               </a-tabs>
               <a-button  class="huangbtn">全部</a-button>
               <a-button class="baibtns">竖屏(3x10)</a-button>
               <a-button class="baibtns">竖屏(5x4)</a-button>
               <a-button class="baibtns">竖屏(5x5)</a-button>
               <a-button class="baibtns">竖屏(10寸)</a-button>
               <a-button class="baibtns">竖屏(3x3)</a-button>
               <a-button class="baibtns">横屏</a-button>
               <a-button class="baibtns">横屏(1x3)</a-button>
               <a-button class="baibtns">横屏(不可触目)</a-button>
               <a-button class="baibtns">无屏</a-button>&ndash;&gt;
             </div>
           </a-tab-pane>
           <a-tab-pane key="2" tab="竖屏">
             <a-button class="huangbtn">全部</a-button>
             <a-button class="baibtns">竖屏(3x10)</a-button>
             <a-button class="baibtns">竖屏(5x4)</a-button>
             <a-button class="baibtns">竖屏(5x5)</a-button>
             <a-button class="baibtns">竖屏(10寸)</a-button>
             <a-button class="baibtns">竖屏(3x3)</a-button>
           </a-tab-pane>
           <a-tab-pane key="3" tab="横屏">
             <a-button class="huangbtn">全部</a-button>
             <a-button class="baibtns">横屏</a-button>
             <a-button class="baibtns">横屏(1x3)</a-button>
             <a-button class="baibtns">横屏(不可触目)</a-button>
           </a-tab-pane>
           <a-tab-pane key="4" tab="无屏">
             <a-button class="huangbtn">无屏</a-button>
           </a-tab-pane>
           <a-tab-pane  tab="刷新">
             <a-button class="huangbtn">无屏</a-button>
           </a-tab-pane>
         </a-tabs>-->
      </a-col>

      <a-col :span="8">

        <a-button @click="mohucx" type="primary" style="float: right;width: 60px;border-radius: 5px;margin-top: 5px">
          搜索
        </a-button>
        <a-input v-model="testData" placeholder="请输入方案名称搜索 "  style=" margin-right: 10px;float: right;width: 45%;font-size: 12px;margin-top: 5px" />
      </a-col>
    </a-row>
    <!--卡片中1-->
    <a-row  >
      <a-col :span="8"  style="margin-top: 20px">
        <a-card class="cards" hoverable style="width: 97%; height:270px; text-align: center;line-height: 240px; background: #F2F2F2">
        <!--  <a-icon type="plus"/>价格策略管理-->
          <div @click="xjshowModal">
            +新增虚拟货架方案
          </div>

        </a-card>

      </a-col>
      <!--中-->
      <a-col :span="8" v-for="(item,index) in list" :key=" 'a-col-' +index" style="margin-top: 20px">
        <a-card hoverable style="width:  97%; height:270px; ">
          <a-row>
            <div ></div>
            <a-col :span="20">
              <b style="background: #FBAE39;color:white;border-radius: 10px;font-size: 12px">&nbsp;横屏&nbsp;</b>
              <b class="top" :key=" 'a-col-' +item.name" >{{item.name}}</b>
            </a-col>
            <a-col :span="4" style="text-align: right">

              <router-link :to="{path:'/edu/cc',query:{id: item.id}}" :key="item.id"  >
              <a-tooltip @click.native="flushComs()"  placement="bottom" :key="item.id">
                <template slot="title">
                  <span  >商品购买</span>
                </template>
                <img class="imgs" :src="imgsrcBianji">
              </a-tooltip>
              </router-link>

              <a-tooltip placement="bottom" :key=" 'a-col-' +item.id"   @click="shanchu(item.id)">
                <template slot="title">
                  <span >删除</span>
                </template>
                <img  class="imgs" :src="imgsrcShanchu">
              </a-tooltip>
            </a-col>
          </a-row>
          <div class="middle" >
            <p :key=" 'a-col-' +item.machinenum">绑定设备：&nbsp;{{item.machinenum}}</p>
            <p  style="margin-top: 15px" :key=" 'a-col-' +item.buildtime">创建时间：&nbsp;{{item.buildtime}}&nbsp;</p>
          </div>
          <a-row>
            <a-col :span="12" style="text-align: center">
<!--              <router-link :to="{path:'/edu/aa',query:{id: item.id}}"  >-->
                <router-link :to="{path:'/edu/aa',query:{id: item.id}}"  >
                <a-button @click.native="flushCom()"   class="editButton" >编辑</a-button>
                <!--  <p>编辑</p>-->
              </router-link>
            </a-col>
            <a-col :span="12" style="text-align: center">
              <!--<a-button class="bangbinButton" type="primary">绑定设备</a-button>-->
              <a-button  class="bangbinButton" type="primary"  @click="showModal(item)">绑定设备</a-button>

            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <!--绑定设备模块框-->
      <!--模态框-->
      <a-modal
        title="请根据设备屏幕属性选择样式(创建之后不可以修改原样式)"
        :visible="xjvisible"
        :confirm-loading="confirmLoading"
        @ok="xjhandleOk"
        @cancel="xjhandleCancel"
        width="700px"
      >
        <!--展示样式-->
        <div>
          <!--对数据库实时检索的问题-->
          <span>请填写方案名称：</span>&nbsp;<a-input v-model="xinjianmingc" placeholder="请输入方案名称添加方案" style="width: 300px;"></a-input>
         <p :key="this.names" style="color: red;margin-left: 120px;margin-top: 10px">{{this.names}}</p>
        </div>
      </a-modal>
      <a-modal  v-model="visible" title="设备绑定"  @cancel="handleCancel" @ok="handleOk" width="52%">
     <!--复选框-->
        <p> 为&nbsp;<span style="font-size: 15px;margin: 5px;color: orange; ">{{this.goodswayMainname}}</span>&nbsp;方案配置设备</p>
     <a-checkbox-group    @change="onChanges">
          <a-row v-for="(items,index ) in lists" :key=" 'a-row-'+index"  >
            <a-col :span="24">
              <!--
              disabled="true"
              colorChanges:item.duration==dynamic
              defaultChecked:items.goodswayMainname==goodswayMainname
              :disabled="1==items.goodswayMainname"
              -->
              <a-checkbox  :value="items.id"  :key=" 'a-row-'+items.machineName">
            {{items.machineName}}<span style="color: orange">（已配置方案{{items.goodswayMainname}}）</span>
              </a-checkbox>
            </a-col>
          </a-row>
        </a-checkbox-group>

       <a-alert style="margin-top: 20px" message="设备必须配置虚拟货架，如需更改可直接在新的虚拟货架上选择该设备进行替换" banner />
      </a-modal>
    </a-row>
    <!--中2-->

    <!--底部-->
    <a-row>
      <a-col :span="12" style="margin-top: 20px" >
        <p>显示{{this.current*5-4}}第至{{this.current*5}}项，查出所有数据共有{{this.totals}}项。</p>
<!--  {{this.total%5}}-->
      </a-col >
      <a-col  :span="12" style="margin-top: 20px" >
        <a-pagination :current="current" :total=this.fenyetotal @change="onChange" style="float: right" />
      </a-col>
    </a-row>
  </div>


</template>


<script>
  import imgBianji from '@/views/edu/img/bianji.png'
  import imgShanchu from '@/views/edu/img/shanchu.png'
  import { deleteAction, getAction,putAction,postAction,httpAction } from '../../api/manage'
  export default {
    data(){



      return{
        msg: 'msg test.',
        names:'',
        isAgree:false,
        checkedValues:'',
        /*判断设备是否绑定的name*/
        goodswayMainname:'',

        totals:'',
        total:'',
        xinjianmingc:'',
        testData:'',
        name: 'bb',
        imgsrcBianji:imgBianji,
        imgsrcShanchu:imgShanchu,
         pageSize:5,
        current:1,
        fenyetotal:'',
        /*新建模态框*/
        confirmLoading: false,
        xjvisible: false,
        /*绑定设备*/
        visible: false,
        goodswayMainid:"",


         /*新增判重*/
        xinjianPanchongUrl:"/goodsway/goodsway/findname",
        /*新增*/
        xinjianUrl:"/goodsway/goodsway/add",
        /*删除*/
          shanchuUrl:"/goodsway/goodsway/delete",
        /*总查询*/
        zongCallbackUrl:"/goodsway/goodsway/list",
        /*绑定设备*/
        bangdingshebeiUrl:"/goodsway/goodsway/findAllMachine",
        /*查绑定的设备*/
        chaSheDeiUrl:"/goodsway/goodsway/findnamebyid",
        /*添加绑定的设备*/
        jiaSheDeiUrl:"/goodsway/goodsway/updateGoodsWayMainid",

li:[],
        list:[
         /* {id:1,name:'sdas',buildtime:'4',machinenum:'sfdsd'},
          {id:2,name:'sdaswer',buildtime:'4',machinenum:'sfdsd'},
          {id:3,name:'sdaswe',buildtime:'4',machinenum:'sfdsd'},*/
        ],
        lists:[
         /* {id:'1',machineName:'yuf',machineTypenum:'sajdhf'},
          {id:'2',machineName:'haha',machineTypenum:'sajdhf'},
          {id:'3',machineName:'yuf',machineTypenum:'sajdhf'}*/
          ],
        list3: [{ title: '选项1', select: false },
          { title: '选项2', select: false },
          { title: '选项3', select: false },
          { title: '选项4', select: false }
        ],
        list4: [{ title: '选项11', select: false },
          { title: '选项22', select: false },
          { title: '选项33', select: false },
          { title: '选项44', select: false }
        ]
      };
    },
    /*穿梭框*/

    created() {
      this.loadData()
    },
    methods: {
      flushCom(){
        this.$router.push({name:"aa"})

      },
     /* flushComs(){
        this.$router.push({name:"cc"})

      },*/

      /*新建设备*/
      xjshowModal() {
        this.xjvisible = true;
      },
      /*添加和判重*/
      xjhandleOk(e) {
        this.names='';
        if(this.xinjianmingc != ''){
        getAction(this.xinjianPanchongUrl,{name:this.xinjianmingc}).then((ref)=>{
        if (ref.success){
           alert("1");
          postAction(this.xinjianUrl,{name:this.xinjianmingc}).then((ref)=>{
            this.confirmLoading = true;
            this.$message.success('设备添加成功！');
          })
          this.loadData();
        /* alert("ads");*/
        }else {
           /*  this.names=ref.message;*/
          this.names='名字重复，请重新填写！！';
          this.$message.error('设备添加失败，请检查网络设置！');
        }
        })
        /**/
        }else {
          this.names='设备名不能为空，请填写设备名';
        }
        this.confirmLoading = true;
        setTimeout(() => {
          this.xjvisible = false;
          this.confirmLoading = false;
        }, 2000);
       /* this.names = '';
          this.xinjianmingc = '';*/

      },
      xjhandleCancel(e) {
        console.log('Clicked cancel button');
        this.xjvisible = false;


      },
      /*绑定设备*/
      /*穿梭框*/
      go_left:function(){
        var tmp=[];
        console.log('er');
        for( var x in this.list){
          if(this.lists[x]['select']==true){
            this.lists[x]['select']=false;
            this.list4.push(this.lists[x]);
            console.log('ers');
          }else{
            tmp.push(this.lists[x])
            console.log('era');
          }
        }
        this.list1=tmp;
      },
      showModal(e){

        this.visible = true;
        this.goodswayMainname =e.name;
       this.goodswayMainid = e.id;
        console.log(this.goodswayMainname);
        console.log(this.goodswayMainid);
       /* getAction(this.chaSheDeiUrl,{}).then((res)=>{
        })*/
        getAction(this.bangdingshebeiUrl).then((res)=>{
          this.lists = res.result;

        })
      },
      /*绑定设备复选框*/
      onChanges(checkedValues) {
        console.log('checked = ', checkedValues);
          this.checkedValues = checkedValues;
      },
      handleCancel(e) {
        console.log(e);
        this.checkedValues = '',
        this.visible = false;

        this.loadData();
      },
      handleOk(e) {
        this.visible = false;

        postAction(this.jiaSheDeiUrl,{goodswayMainid:this.goodswayMainid,goodswayMainname:this.goodswayMainname,machineid:JSON.stringify(this.checkedValues)}).then((res)=>{
          if(res.success){
            this.$message.success('设备绑定成功！');
          }else {
            this.$message.error('设备绑定失败，请检查网络设置！');
          }
        })

        this.checkedValues = '';

      },

      /*模糊查询*/
      mohucx:function(){
        this.loadData();
       /* this.$router.push({name:"aa"});*/
      },
      /*刷新按钮*/
      shuaxin:function(e){
       this.$router.go(0);
       /* reload();*/
        this.loadData();
        console.log(e);
      },
      /*删除*/
      shanchu:function(e){
        deleteAction(this.shanchuUrl,{id:e}).then((ref)=>{
          if (ref.success){
            this.$message.success('设备删除！！');
          }else{
            this.$message.success('设备删除！！');
          }
        })
        this.loadData();
        /*location.reload(true);
        this.$router.go(0);*/
      },
      onChange(current) {
        this.current = current;
        this.loadData()
        console.log(this.current);
      },
      loadData(){
        getAction(this.zongCallbackUrl,{pageNo:this.current,pageSize:this.pageSize,name:"*"+this.testData+"*"}).then((res)=>{
          /* this.list = res.result.records;*/
          if(res.success){
            this.$message.success('设备加载成功！');
          this.list = res.result.records;
          this.fenyetotal = res.result.total*2;
         this.totals = Number(res.result.total);


          }
        else {
            this.$message.error('设备加载失败，请检查网络设置！');
          }
        })

      },




      /*克隆*/
      kelong:function(e){
        getAction(this.zongCallbackUrl,e).then((ref)=>{
          /* var add = index;
           this.list.splice(ref.e(add))*/
        })
        location.reload(true);
        console.log(e);

      },
    },

  };
</script>

<style scoped>
  p{
    font-size: 12px;
    color: #80848F;
  }
  .cards:hover{
    background: #F7F7F7;
  }
  .bangbinButton{
    border-radius: 20px;
    width: 80%;
    height: 35px;
  }

  .editButton{
    border-radius: 20px;
    width: 80%;
    /* margin: 20px;*/
    height: 35px;
    background:#F7F7F7;
  }
  .huangButton{
    border-radius: 20px;
    font-size: 12px;
    background:#FBAE39;
  }
  .imgs{
    margin: 0 0 0 10px;
  }
  .top{
    font-size: 16px;
    color: #1c2438;
    margin: 5px 0 0 5px;
  }
  .middle{
    padding: 60px 0 40px 30px;
  }
  /*yuanyuan*/
  .huangbtn{
    background: #FAC62A;
    border: 1px solid gold;
    margin-bottom: 6px;
    color: white;
  }
  .baibtns{
    background: #F7F7F7;
    border: 1px solid #DCDDE0;
    margin-left: 10px;
    margin-bottom: 6px;

  }
/*  穿梭狂*/
  .left{
    width: 46%;
    height: 300px;
    float: left;
    border: 1px solid #ddd;
  }
  .right{
    width: 46%;
    height: 300px;
    float: left;
    border: 1px solid #ddd;
  }
  .center{float: left;width: 50px;height: 50px;}
  .left{margin-right: 20px;}

</style>














