#! /usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const figlet = require("figlet");
program
	// 定义命令和参数
	.command("create <app-name>")
	.description("create a new project")
	// -f or --force 为强制创建，如果创建的目录存在则直接覆盖
	.option("-f, --force", "overwrite target directory if it exist")
	.action((name, options) => {
		// 最终
		require("../lib/create")(name, options);
	});

program
	// 配置版本号信息
	.version(`v${require("../package.json").version}`)
	.usage("<command> [option]");

// 打印信息
program
	// 监听 --help 执行
	.on("--help", () => {
		// 新增说明信息
		console.log(
			`\r\nRun ${chalk.cyan(
				`zr <command> --help`
			)} for detailed usage of given command\r\n`
		);
	});

// 打印 logo
program.on("--help", () => {
	// 使用 figlet 绘制 Logo
	console.log(
		"\r\n" +
			figlet.textSync("zhurong", {
				font: "Ghost",
				horizontalLayout: "default",
				verticalLayout: "default",
				width: 80,
				whitespaceBreak: true,
			})
	);
	// 新增说明信息
	console.log(`\r\nRun ${chalk.cyan(`roc <command> --help`)} show details\r\n`);
});

// 解析用户执行命令传入参数
program.parse(process.argv);
