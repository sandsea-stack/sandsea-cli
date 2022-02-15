/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-02-15 15:40:41
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-02-15 16:43:26
 * @Description:
 */
//

//

const axios = require("axios");

axios.interceptors.response.use(res => {
	return res.data;
});

/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
	return axios.get("https://api.github.com/orgs/sandsea-stack/repos", {
		headers: {
			GITHUB_TOKEN: "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",
		},
	});
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function getTagList(repo) {
	return axios.get(`https://api.github.com/repos/sandsea-stack/${repo}/tags`, {
		headers: {
			GITHUB_TOKEN: "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",
		},
	});
}

module.exports = {
	getRepoList,
	getTagList,
};
