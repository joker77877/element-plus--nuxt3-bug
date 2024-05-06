<template>
  <div class="page-index">
    <Counter></Counter>
    <el-input :value="val"> <template #prepend>
          <el-select size="large" placeholder="Select" style="width: 94px">
            <el-option label="作品" value="1"></el-option>
            <el-option label="设计师" value="2"></el-option>
          </el-select>
        </template></el-input>
        <ElIconSearch style="width: 24px"></ElIconSearch>
        <!-- <icon-star></icon-star> -->
  </div>
</template>
<script setup lang="ts">
  const val = ref('123213123')
</script>

<style>
.page-index {
  padding-top: 60px;
  text-align: center;
}
</style>
