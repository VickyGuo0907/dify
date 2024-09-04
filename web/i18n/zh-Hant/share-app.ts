const translation = {
  common: {
    welcome: '',
    appUnavailable: '應用不可用',
    appUnkonwError: '應用不可用',
  },
  chat: {
    newChat: '新對話',
    pinnedTitle: '已置頂',
    unpinnedTitle: '對話列表',
    newChatDefaultName: '新的對話',
    resetChat: '重置對話',
    powerBy: 'Powered by',
    prompt: '提示詞',
    privatePromptConfigTitle: '對話設定',
    publicPromptConfigTitle: '對話前提示詞',
    configStatusDes: '開始前，您可以修改對話設定',
    configDisabled: '此次會話已使用上次會話表單',
    startChat: '開始對話',
    privacyPolicyLeft: '請閱讀由該應用開發者提供的',
    privacyPolicyMiddle: '隱私政策',
    privacyPolicyRight: '。',
    deleteConversation: {
      title: '刪除對話',
      content: '您確定要刪除此對話嗎？',
    },
    tryToSolve: '嘗試解決',
    temporarySystemIssue: '抱歉，臨時系統問題。',
  },
  generation: {
    tabs: {
      create: '執行一次',
      batch: '批次執行',
      saved: '已儲存',
    },
    savedNoData: {
      title: '您還沒有儲存結果！',
      description: '開始生成內容，您可以在這裡找到儲存的結果。',
      startCreateContent: '開始生成內容',
    },
    title: 'AI 智慧書寫',
    queryTitle: '查詢內容',
    completionResult: '生成結果',
    queryPlaceholder: '請輸入文字內容',
    run: '執行',
    copy: '複製',
    resultTitle: 'AI 書寫',
    noData: 'AI 會在這裡給你驚喜。',
    csvUploadTitle: '將您的 CSV 檔案拖放到此處，或',
    browse: '瀏覽',
    csvStructureTitle: 'CSV 檔案必須符合以下結構：',
    downloadTemplate: '下載模板',
    field: '',
    batchFailed: {
      info: '{{num}} 次執行失敗',
      retry: '重試',
      outputPlaceholder: '無輸出內容',
    },
    errorMsg: {
      empty: '上傳檔案的內容不能為空',
      fileStructNotMatch: '上傳檔案的內容與結構不匹配',
      emptyLine: '第 {{rowIndex}} 行的內容為空',
      invalidLine: '第 {{rowIndex}} 行: {{varName}}值必填',
      moreThanMaxLengthLine: '第 {{rowIndex}} 行: {{varName}}值超過最大長度 {{maxLength}}',
      atLeastOne: '上傳檔案的內容不能少於一條',
    },
  },
}

export default translation
