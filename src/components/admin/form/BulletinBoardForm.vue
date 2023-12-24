<template>
  <div>
    <form class="flex flex-col gap-2">
      <div >
        <label for="announcementTitle">
          公告標題
        </label>
        <input type="text" id="announcementTitle">
      </div>
      <div>
        <label for="announcementType">
          公告時間
        </label>
        <input type="date">
        -
        <input type="date">
      </div>
      <div class="flex flex-col">
        <label for="announcementContent">
          公告內容
        </label>
        <textarea type="text" id="announcementContent" class='resize-none p-1' rows="5"></textarea>
      </div>
    </form>
  </div>
</template>

<style scoped>
form td {
  @apply py-1;
}

form input, form textarea{
  @apply border-[1px];
  @apply border-gray-300;
}

form input { 
  @apply h-8;
}

form table label {
  @apply pr-1;
  @apply inline-block;
  @apply text-right;
  @apply w-full;
}
</style>