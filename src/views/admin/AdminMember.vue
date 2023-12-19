<template>
  <AdminHeader></AdminHeader>
  <AdminSider></AdminSider>
  <main class="pl-40 h-full flex flex-col pt-11">
    <div class="flex items-center">
      <h2 class="font-semibold text-lg px-3 py-2">員工帳號:</h2>
      <span>
        DMP0001
      </span>
    </div>

    <div class="px-3">
      <div>
        <ul class="flex">
          <li
            :class="{'active': chosenTab === 'accountInfo'}" 
            class="rounded-tl-xl rounded-tr-md px-6 border-t-[1px] border-x-[1px] border-gray-400"
            @click.stop.prevent="chooseTab('accountInfo')"
          >
            帳號資料
          </li>
          <li
            :class="{'active': chosenTab === 'bankAccount'}"
            class="rounded-tl-xl rounded-tr-md px-6 border-t-[1px] border-x-[1px] border-gray-400"
            @click.stop.prevent="chooseTab('bankAccount')"
          >
            銀行帳號
          </li>
          <li
            :class="{'active': chosenTab === 'pointRecord'}"
            class="rounded-tl-xl rounded-tr-md px-6 border-t-[1px] border-x-[1px] border-gray-400"
            @click.stop.prevent="chooseTab('pointRecord')"
            >
            點數紀錄
          </li>
          <li
            :class="{'active': chosenTab === 'logInRecord'}"
            class="rounded-tl-xl rounded-tr-md px-6 border-t-[1px] border-x-[1px] border-gray-400"
            @click.stop.prevent="chooseTab('logInRecord')"
            >
            登入紀錄
          </li>
        </ul>
        <div class="border-[1px] border-gray-400 p-2">
          <div v-if="chosenTab === 'accountInfo'" class="grid grid-cols-12 grid-rows-4 gap-2">
            <div class="border-[1px] border-gray-300 col-start-1 col-span-5 row-start-1 row-span-4">
              <div class="bg-[#949DB0]">帳號資料</div>
              <div class="px-6 py-1">
                <form id="memberInfo">
                  <table>
                    <tr>
                      <td>
                        員工帳號
                      </td>
                      <td>
                        <span class="inline-block leading-8 w-full h-8 border-[1px] border-gray-300 bg-[#C4C4C4]">
                          DMP0001
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="memberName">
                          姓名
                        </label>
                      </td>
                      <td>
                        <input id="memberName" type="text">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="memberPhoneNumber">
                          電話
                        </label>
                      </td>
                      <td>
                        <input id="memberPhoneNumber" type="text">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="memberGroup">
                          員工群組
                        </label>
                      </td>
                      <td>
                        <select id="memberGroup">
                          <option value="0" selected>新進</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="memberState">
                          狀態
                        </label>
                      </td>
                      <td>
                        <select id="memberState">
                          <option value="0" selected>啟用</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          註冊日期
                        </span>
                      </td>
                      <td>
                        <span class="inline-block leading-8 w-full h-8 border-[1px] border-gray-300 bg-[#C4C4C4]">
                          2023-12-16 12:00:02
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="memberLineId">
                          LineId
                        </label>
                      </td>
                      <td>
                        <input id="memberLineId" type="text">
                      </td>
                    </tr>
                    <tr>
                      <td class="flex justify-end">
                        <label for="memberDescription">
                          備註
                        </label>
                      </td>
                      <td>
                        <textarea id="memberDescription" cols="30" rows="5" class="resize-none">

                        </textarea>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <button class="bg-[#2055A5] text-white px-5 py-1">
                          修改
                        </button>
                      </td>
                    </tr>
                  </table>
                </form>
              </div>
            </div>
            <div class="border-[1px] border-gray-300 col-start-6 col-span-5  row-start-1 row-span-1">
              <div class="bg-[#87AE91]">錢包紀錄</div>
              <div class="px-6 py-1">
                <div class="flex items-center">
                  <span class="basis-1/4 text-right mr-2">
                    主錢包點數
                  </span>
                  <span class="inline-block basis-1/2 leading-8 h-8 border-[1px] border-gray-300 bg-[#C4C4C4] text-right">
                    0.00
                  </span>
                </div>
              </div>
            </div>
            <div class="border-[1px] border-gray-300 col-start-6 col-span-5 row-start-2 row-span-1">
              <div class="bg-[#87AE91]">點數資訊</div>
              <div class="px-6 py-1 flex flex-col gap-2">
                <div class="flex items-center">
                  <span class="basis-1/4 text-right mr-2">
                    補點總和
                  </span>
                  <span class="inline-block basis-1/2 leading-8 h-8 border-[1px] border-gray-300 bg-[#C4C4C4] text-right">
                    0.00
                  </span>
                </div>
                <div class="flex items-center">
                  <span class="basis-1/4 text-right mr-2">
                    扣點總和
                  </span>
                  <span class="inline-block basis-1/2 leading-8 h-8 border-[1px] border-gray-300 bg-[#C4C4C4] text-right">
                    0.00
                  </span>
                </div>
              </div>
            </div>
            <div class="border-[1px] border-gray-300 col-start-6 col-span-5 row-start-4 row-span-1">
              <div class="bg-[#87AE91]">密碼管理</div>
              <div class="px-6 py-1">
                <div class="text-center">
                  <button class="bg-[#2055A5] text-white px-5 py-1">
                    重設登入密碼    
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div v-if="chosenTab === 'bankAccount'" class="grid grid-cols-12 grid-rows-4 gap-2">
            <div class="border-[1px] border-gray-300 col-start-1 col-span-5 row-start-1 row-span-2">
              <div class="bg-[#949DB0]">更改銀行資料</div>
              <div class="px-6 py-1">
                <form>
                  <table>
                    <tr>
                      <td>
                        <label for="bankName">
                          銀行名稱
                        </label>
                      </td>
                      <td>
                        <select id="bankName">
                          <option value="822" selected>中國信託銀行(822)</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="bankBranch">
                          銀行分行
                        </label>
                      </td>
                      <td>
                        <input id="bankBranch" type="text">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="bankAccountName">
                          銀行戶名
                        </label>
                      </td>
                      <td>
                        <input id="bankAccountName" type="text">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="bankAccount">
                          銀行帳號
                        </label>
                      </td>
                      <td>
                        <input id="bankAccount" type="text">
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <button class="bg-[#2055A5] text-white px-5 py-1">
                          提交
                        </button>
                      </td>
                    </tr>
                  </table>
                </form>
              </div>
            </div>

            <div class="border-[1px] border-gray-300 col-start-1 col-span-5 row-start-3 row-span-1">
              <div class="bg-[#949DB0]">虛擬錢包位址(TRC通道) USDT</div>
              <div class="px-6 py-1">
                <div>
                  <form>
                    <table class="w-full">
                      <tr>
                        <td>
                          <label for="cryptoAddress">
                            位址
                          </label>
                        </td>
                        <td>
                          <input id="cryptoAddress" type="text">
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <button class="bg-[#2055A5] text-white px-5 py-1">提交</button>
                        </td>
                      </tr>
                    </table>
                  </form>
                </div>
              </div>
            </div>

            <div class="border-[1px] border-gray-300 col-start-6 col-span-7 row-start-1 row-span-2">
              <div class="bg-[#87AE91]">銀行列表</div>
              <div class="px-2 py-1">
                <div>
                  <table class="w-full">
                    <tr class="flex gap-2 justify-between items-center">
                      <td>
                        中國信託商業銀行(822)
                      </td>
                      <td>
                        759540775421
                      </td>
                      <td>
                        張三豐
                      </td>
                      <td class="">
                        <button class="bg-[#F5B248] text-white px-5 py-1">刪除</button>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <div class="border-[1px] border-gray-300 col-start-6 col-span-7 row-start-3 row-span-1">
              <div class="bg-[#87AE91]">銀行列表</div>
              <div class="px-2 py-1">
                <div>
                  <table class="w-full">
                    <tr class="flex gap-2 justify-between items-center">
                      <td>
                        sdfgjklnasdfa;osijd;foiasjdfij3o23isdf2dsfg345sd
                      </td>
                      <td class="">
                        <button class="bg-[#F5B248] text-white px-5 py-1">刪除</button>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div v-if="chosenTab === 'pointRecord'" class="flex flex-col gap-2">
            <div class="border-[1px] border-gray-300 w-4/5">
              <div class="bg-[#949DB0]">點數查詢</div>
              <div class="px-6 py-1">
                <div>
                  <form>
                    <table>
                      <tr>
                        <td>
                          查詢時間
                        </td>
                        <td>
                          <label for="todayOption" class="bg-[#3FC0E5] text-white px-4 py-1 mr-2">
                            今日
                          </label>
                          <label for="yesterdayOption" class="bg-[#3FC0E5] text-white px-4 py-1 mr-2">
                            昨日
                          </label>
                          <label for="thisWeekOption" class="bg-[#3FC0E5] text-white px-4 py-1 mr-2">
                            本週
                          </label>
                          <label for="lastWeekOption" class="bg-[#3FC0E5] text-white px-4 py-1 mr-2">
                            上週
                          </label>
                          <label for="thisMonthOption" class="bg-[#3FC0E5] text-white px-4 py-1 mr-2">
                            本月
                          </label>
                          <label for="lastMonthOption" class="bg-[#3FC0E5] text-white px-4 py-1 mr-2">
                            上月
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          日期區間
                        </td>
                        <td>
                          <div class="flex">
                            <input type="datetime-local">
                            <span> - </span>
                            <input type="datetime-local">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          狀態
                        </td>
                        <td class="flex gap-4">
                          <div>
                            <input id="all" type="radio" name="state" value="all">
                            <label for="all">
                            全部
                            </label>
                          </div>
                          <div>
                            <input id="addPoint" type="radio" name="state" value="add">
                            <label for="addPoint">
                            補點
                            </label>
                          </div>
                          <div>
                            <input id="minusPoint" type="radio" name="state" value="minus">
                            <label for="minusPoint">
                            扣點
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <button class="bg-[#2055A5] text-white px-5 py-1">
                            查詢
                          </button>
                        </td>
                      </tr>
                    </table>
                  </form>
                </div>
              </div>
            </div>

            <div class="w-4/5">
              <div class="bg-[#949DB0]">主錢包紀錄</div>
              <div class="border-x-[1px] border-gray-300">
                <div class="flex p-2">
                  共
                  <span>
                    220
                  </span>
                  筆資料，總頁數
                  <span>
                    5
                  </span>
                  頁 每頁筆數:
                  <div>
                    <select name="itemsCount">
                      <option value="50" selected>50</option>
                    </select>
                  </div>
                  目前第:
                  <div>
                    <select name="chosenPage">
                      <option value="1" selected>1</option>
                    </select>
                  </div>
                  頁
                </div>
              </div>
              <div>
                <table class="filter-table w-full">
                  <thead>
                    <tr class="bg-[#7B7B7B] text-white">
                      <th>
                        No.
                      </th>
                      <th>
                        補扣點時間
                      </th>
                      <th>
                        事由
                      </th>
                      <th>
                        點數紀錄
                      </th>
                      <th>
                        主錢包餘額
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        1
                      </td>
                      <td>
                        2023-12-16 12:00:02
                      </td>
                      <td>
                        打卡簽到津貼
                      </td>
                      <td>
                        +100
                      </td>
                      <td>
                        700.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div v-if="chosenTab === 'logInRecord'" class="flex flex-col gap-2">
            <div class="border-[1px] border-gray-300 w-4/5">
              <div class="bg-[#949DB0]">登入查詢</div>
              <div class="px-6 py-1">
                <div>
                  <form>
                    <table>
                      <tr>
                        <td>
                          查詢時間
                        </td>
                        <td>
                          <label for="todayOption" class="bg-[#3FC0E5] text-white px-4 py-1 mr-2">
                            今日
                          </label>
                          <label for="yesterdayOption" class="bg-[#3FC0E5] text-white px-4 py-1 mr-2">
                            昨日
                          </label>
                          <label for="thisWeekOption" class="bg-[#3FC0E5] text-white px-4 py-1 mr-2">
                            本週
                          </label>
                          <label for="lastWeekOption" class="bg-[#3FC0E5] text-white px-4 py-1 mr-2">
                            上週
                          </label>
                          <label for="thisMonthOption" class="bg-[#3FC0E5] text-white px-4 py-1 mr-2">
                            本月
                          </label>
                          <label for="lastMonthOption" class="bg-[#3FC0E5] text-white px-4 py-1 mr-2">
                            上月
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          日期區間
                        </td>
                        <td>
                          <div class="flex">
                            <input type="datetime-local">
                            <span> - </span>
                            <input type="datetime-local">
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <button class="bg-[#2055A5] text-white px-5 py-1">
                            查詢
                          </button>
                        </td>
                      </tr>
                    </table>
                  </form>
                </div>
              </div>
            </div>

            <div class="w-4/5">
              <div class="bg-[#949DB0]">登入紀錄</div>
              <div class="border-x-[1px] border-gray-300">
                <div class="flex p-2">
                  共
                  <span>
                    220
                  </span>
                  筆資料，總頁數
                  <span>
                    5
                  </span>
                  頁 每頁筆數:
                  <div>
                    <select name="itemsCount">
                      <option value="50" selected>50</option>
                    </select>
                  </div>
                  目前第:
                  <div>
                    <select name="chosenPage">
                      <option value="1" selected>1</option>
                    </select>
                  </div>
                  頁
                </div>
              </div>
              <div>
                <table class="filter-table w-full">
                  <thead>
                    <tr class="bg-[#7B7B7B] text-white">
                      <th>
                        No.
                      </th>
                      <th>
                        登入時間
                      </th>
                      <th>
                        登入IP
                      </th>
                      <th>
                        登入裝置
                      </th>
                      <th>
                        狀態
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        1
                      </td>
                      <td>
                        2023-12-16 12:00:02
                      </td>
                      <td>
                        149.120.3.8
                      </td>
                      <td>
                        手機
                      </td>
                      <td>
                        登入成功
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import AdminHeader from '../../components/admin/AdminHeader.vue'
import AdminSider from '../../components/admin/AdminSider.vue'

const chosenTab = ref('accountInfo')

const chooseTab = (tabName) => {
  chosenTab.value = tabName
}
</script>

<style scoped>
.active {
  @apply bg-[#949DB0];
}

form tr td {
  @apply py-1;
}

form tr td:first-child {
  @apply text-right;
  @apply pr-2;
}
form tr td input[type='text'],
form tr td input[type='dateTime-local'] {
  @apply border-[1px];
  @apply border-gray-300;
  @apply h-8;
  @apply w-full
}

form tr td textarea {
  @apply border-[1px];
  @apply border-gray-300;
}

.filter-table td, .filter-table th {
  @apply border-[1px];
  @apply border-gray-400;
  @apply text-center;
  @apply p-2;
}
</style>