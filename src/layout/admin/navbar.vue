<!-- <template>
  <div class="w-full bg-white px-7 flex items-center justify-between h-[60px]">
    <el-breadcrumb separator="/" class="text-xl">
      <el-breadcrumb-item><a href="/">编辑器</a></el-breadcrumb-item>
      <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="navbar">
      <img
        src="@/assets/home-img.jpg"
        class="w-8 h-8 rounded-full object-cover mr-2"
      />
      <span class="text-sm text-gray-600">{{ userstore.info?.name }}</span>

      <section>
        <div>
          <i class="fab fa-folder-open mr-2"></i>
          <a>文档资料</a>
        </div>
        <div>
          <i class="fas fa-ad mr-2"></i>
          <a>网站首页</a>
        </div>
        <div class="pb-0">
          <i class="fas fa-sign-out-alt mr-2"></i>
          <a @click="outLogin">退出登录</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userStore } from "@/store/useStore";
import util from "@/utils";
import { useRouter } from "vue-router";
import { cacheEnum } from "@/enum/cacheEnum";
const router = useRouter();

const userstore = userStore();
const outLogin = () => {
  util.store.remove(cacheEnum.TOKEN);
  router.push({ name: "login" });
  userstore.info = null;
};
</script>

<style scoped lang="scss">
.navbar {
  @apply flex items-center relative cursor-pointer p-4 -mr-4;
  section {
    @apply hidden absolute top-14 right-4 text-gray-500 text-[16px] bg-white px-2 py-1 rounded-sm border-solid border-[1px] border-gray-400 z-10;
    div {
      @apply whitespace-nowrap pb-1 hover:cursor-pointer hover:text-[#9be6ff];
    }
  }
  &:hover > section {
    display: block;
  }
}
</style> -->
