<template>
    <div>
        <el-button type="primary" @click="newTeamDialogVisible = true">{{$t('team.add')}}</el-button>

        <el-table :data="teamList" style="width: 100%">
            <el-table-column prop="ID" label="ID" width="180" />
            <el-table-column prop="Logo" :label="$t('team.logo')" width="180" >
                <!-- attention -->
                <template #default="scope">
                    <el-image style="width: 50px; height: 50px" :src="utils.baseURL + '/uploads/' + scope.row.Logo"
                    fit="fill"/>

                </template>
                </el-table-column>
            <el-table-column prop="Name" :label="$t('team.team_name')" />
            <el-table-column prop="Score" :label="$t('team.score')" :formatter="(row) => utils.FormatFloat(row.Score)"/>
            <el-table-column width="300" prop="SecretKey" label="Token"/>
            <el-table-column :label="$t('general.create_at')" width="180" :formatter="(row)=>utils.FormatGoTime(row.CreatedAt)"/>
            <el-table-column :label="$t('general.update_at')" width="180" :formatter="(row)=>utils.FormatGoTime(row.UpdatedAt)"/>
            <el-table-column :label="$t('general.operate')" width="200">

                <template #default="scope" >
                    <el-button
                            size="mini"
                            @click="()=>{editTeamForm = JSON.parse(JSON.stringify(scope.row)); editTeamDialogVisible = true}">
                        {{$t('general.edit')}}
                    </el-button>

                    <el-popconfirm
                            :confirmButtonText="$t('general.confirm_cancel')"
                            :cancelButtonText="$t('general.cancel')"
                            icon="el-icon-info"
                            iconColor="red"
                            :title="$t('team.delete_confirm')"
                            @onConfirm="handleDelete(scope.row)">
                    </el-popconfirm>
                    <el-button size="mini" type="danger" slot="reference">{{$t('general.delete')}}</el-button>
                </template>

            </el-table-column>

        </el-table>

        <!-- List -->
        <div>{{ teamList }}</div>

        <!-- New team -->
        <el-dialog :title="$t('team.add')" v-model="newTeamDialogVisible">
            <el-button @click="newTeamForm.push({Name: '',Logo: ''})">{{$t('team.new')}}</el-button>
            <el-divider/>
            <div v-for="(item, index) in newTeamForm" v-bind:key="index">
                <el-row :gutter="20">
                    <el-form :model="item" label-width="80px">
                        <el-button type="danger" icon="el-icon-delete" circle @click="newTeamForm.splice(index, 1)"/>
                        <el-col :span="10">
                            <el-form-item :label="$t('team.team_name')">
                                <el-input v-model="item.Name"/>
                                <el-input v-model="item.Logo" size="mini" :placeholder="$t('team.picture_url')"/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item :label="$t('team.team_logo')">
                                <el-upload name="picture" :action="utils.baseURL + '/manager/uploadPicture'"
                                           :headers="{'Authorization': token}"
                                           :on-success="(response) => {newTeamForm[index].Logo = response.data}">
                                    <el-button size="small" type="primary">{{$t('team.upload')}}</el-button>
                                    <div slot="tip" class="el-upload__tip">{{$t('team.file_limit')}}</div>
                                </el-upload>
                            </el-form-item>
                        </el-col>
                    </el-form>
                </el-row>
            </div>
            <el-button type="primary" @click="onNewTeams">{{$t('team.add')}}</el-button>
        </el-dialog>

        <!-- Edit team -->
        <el-dialog :title="$t('team.edit')" v-model="editTeamDialogVisible">
            <el-form label-width="80px">
                <el-form-item :label="$t('team.team_name')">
                    <el-input v-model="editTeamForm.Name"/>
                    <el-input v-model="editTeamForm.Logo" size="mini" :placeholder="$t('team.picture_url')"/>
                </el-form-item>
                <el-form-item :label="$t('team.team_logo')">
                    <el-upload name="picture" :action="utils.baseURL + '/manager/uploadPicture'"
                               :headers="{'Authorization': token}"
                               :on-success="(response) => {editTeamForm.Logo = response.data}">
                        <el-button size="small" type="primary">{{$t('team.upload')}}</el-button>
                        <div slot="tip" class="el-upload__tip">{{$t('team.file_limit')}}</div>
                    </el-upload>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onEditTeam">{{$t('team.edit')}}</el-button>
                    <el-popconfirm
                            :title="$t('team.reset_password_confirm')"
                            :confirmButtonText="$t('general.apply')"
                            :cancelButtonText="$t('general.cancel')"
                            @onConfirm="onResetPassword(editTeamForm.ID)"
                    >
                        <el-button slot="reference">{{$t('team.reset_password')}}</el-button>
                    </el-popconfirm>
                </el-form-item>
            </el-form>
        </el-dialog>

    </div>
</template>


<script setup>
// 导入 ref 函数和 onMounted 钩子
import { ref, onMounted } from 'vue';
import utils from '../utils.js'
// 使用 ref 创建响应式变量
let teamList = ref({}); 
let newTeamDialogVisible = ref(false);
let editTeamDialogVisible = ref(false);
let token = localStorage.getItem('managerToken');
let newTeamForm = ref([{ Name: '', Logo: '' }]);
let editTeamForm = ref({ Name: '', Logo: '' });

// 使用 onMounted 替代 mounted 钩子

onMounted(() => {
    console.log(`the component is now mounted.`)
    getTeams()

})
/* 
testData   
teamList.value = [ { "ID": 1, "CreatedAt": "2024-01-31T00:01:41+08:00", "UpdatedAt": "2024-01-31T00:01:41+08:00", "DeletedAt": null, "Name": "aaa", "Logo": "462d4e0dc773dc9d.png", "Score": 0, "SecretKey": "a3e5c9a08745f9f7" }, { "ID": 2, "CreatedAt": "2024-01-31T00:02:21+08:00", "UpdatedAt": "2024-01-31T00:02:21+08:00", "DeletedAt": null, "Name": "bbb", "Logo": "3732f504d96dcfa2.png", "Score": 0, "SecretKey": "2305fc73c36f4ea2" }, { "ID": 3, "CreatedAt": "2024-01-31T00:03:28+08:00", "UpdatedAt": "2024-01-31T00:03:28+08:00", "DeletedAt": null, "Name": "ddd", "Logo": "e60969c4a99ec443.png", "Score": 0, "SecretKey": "4e87e8dbb74206f2" }, { "ID": 4, "CreatedAt": "2024-01-31T00:47:07+08:00", "UpdatedAt": "2024-01-31T00:47:07+08:00", "DeletedAt": null, "Name": "eeee", "Logo": "https://image.16pic.com/00/53/26/16pic_5326745_s.jpg.png", "Score": 0, "SecretKey": "2997bf7f05ab7e6e" }, { "ID": 5, "CreatedAt": "2024-01-31T00:50:38+08:00", "UpdatedAt": "2024-01-31T00:50:38+08:00", "DeletedAt": null, "Name": "sss", "Logo": "https://image.16pic.com/00/53/26/16pic_5326745_s.jpg", "Score": 0, "SecretKey": "aa0e68fec0848d90" }, { "ID": 6, "CreatedAt": "2024-01-31T00:51:55+08:00", "UpdatedAt": "2024-01-31T00:51:55+08:00", "DeletedAt": null, "Name": "zzz", "Logo": "https://image.16pic.com/00/53/26/16pic_5326745_s.jpg", "Score": 0, "SecretKey": "1a617a31d370d913" } ]
 */
const getTeams = () => {
    utils.GET('/manager/teams').then(res => {
    console.log("getTeams func worked! ")
   /*  attention */
    teamList.value = res
    }).catch(err => this.$message({message: err, type: 'error'}))

};



const onNewTeams = () => {
    utils.POST('/manager/teams', this.newTeamForm).then(res => {
    newTeamDialogVisible.value = false
    getTeams()
    // Clean form
    newTeamForm.value = [{
    Name: '',
    Logo: '',
    }]
    const h = this.$createElement;
    var password = [h('p', null, this.$i18n.t('team.save_password'))]
    res.forEach(item => {
    password.push(h('p', null, this.$i18n.t('team.account_detail', {
    Name: item.Name,
    Password: item.Password
    })))
    })

    this.$alert(h('p', null, password), this.$i18n.t('team.team_password'), {
    confirmButtonText: this.$i18n.t('team.save_confirm')
    });
    }).catch(err => this.$message({message: err, type: 'error'}))
}; 

const onEditTeam = () => {
    utils.PUT('/manager/team', this.editTeamForm).then(res => {
    this.editTeamDialogVisible = false
    this.getTeams()
    this.$message.success(res)
    }).catch(err => this.$message({message: err, type: 'error'}))
}; 

const onResetPassword = () => { (teamID) =>
    utils.POST('/manager/team/resetPassword', {
    ID: teamID
    }).then(res => {
    editTeamDialogVisible.value = false
    this.$alert(res, this.$i18n.t('team.new_password'), {
    confirmButtonText: this.$i18n.t('general.apply')
    })
    }).catch(err => this.$message({message: err, type: 'error'}))
};

const handleDelete = () => {(row) => 

    utils.DELETE("/manager/team?id=" + row.ID).then(res => { this.$message({message: res,type: 'success'});
    getTeams()}).catch(err => {this.$message({message: err,type: 'error'});
    })

}
        

</script>




<style scoped>

</style>
