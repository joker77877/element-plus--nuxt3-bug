<script setup lang="ts">
const {data} = useAsyncData('data', () => '123123')
const { count } = useCount();
const val  = ref('12312312312');
</script>

<template>

  <el-input-number v-model:value="count" :min="1" :max="10" />
  <el-input v-model="val" > <template #prepend>
          <el-select size="large" placeholder="Select" style="width: 94px">
            <el-option label="作品" value="1"></el-option>
            <el-option label="设计师" value="2"></el-option>
          </el-select>
        </template></el-input>
</template>
