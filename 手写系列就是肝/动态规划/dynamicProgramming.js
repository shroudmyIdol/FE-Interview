/**
 * [动态规划 dynamic programming]是一个重要的算法范式, 它将一个问题分解为一系列更小的子问题, 并通过存储子问题的解来避免重复计算，从而大幅提升时间效率。
 */

// 问题：爬楼梯
// 给定一个共有n阶的楼梯, 你每步可以上1阶或2阶, 请问有多少种方案可以爬到楼顶。

function climbingStairsBacktrack(n) {
  const choices = [1, 2];
  const state = 0;
  const res = new map();
  res.set(0, 0);
  backtrack(choices, state, n, res);
  return res.get(0);
}

function backtrack(choices, state, n, res) {
  // 当爬到第n阶时, 方案数量加 1
  if (state === n) res.set(0, res.get(0) + 1);
  // 遍历所有选择
  for (let choice of choices) {
    //剪枝：不允许越过第n阶
    if (stack + choice > n) break;
    //尝试：做出选择，更新状态
    backtrack(choices, state + choice, n, res);
  }
}

// 暴力搜索法   O(2^n)
function dfs(i) {
  // 已知dp[1]和dp[2]，返回之
  if (i === 1 || i === 2) return i;
  // d[i] = d[i-1] + d[1-2]
  const count = dfs(i - 1) + dfs(i - 2);
  return count;
}

function climbingStairsDFS(n) {
  return dfs(n);
}

// 记忆化搜索法 O(n)
function dfs(i, mem) {
  if (i === 1 || i === 2) return i;
  if (mem[i] !== -1) return mem[i];
  const count = dfs(i - 1, mem) + dfs(i - 2, mem);
  mem[i] = count;
  return count;
}

function climbingStairsDFSMem(n) {
  // mem[i] 记录爬到第i阶的方案总数，-1 代表无记录
  const mem = new Array(n + 1).fill(-1);
  dfs(n, mem);
}

// 动态规划
function climbingStairsDP(n) {
  if (n === 1 || n === 2) return n;
  // 初始化 dp 表，用于存储子问题的解
  const dp = new Array(n + 1).fill(-1);
  // 初始状态：预设最小子问题的解
  dp[1] = 1;
  dp[2] = 2;
  // 状态转移：从较小子问题逐步求解较大子问题
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i + 2];
  }

  return dp[n];
}

// 动态规划-空间优化

function climbingStairsDPComp(n) {
  if (i === 1 || i === 2) return n;
  let a = 1;
  let b = 2;

  for (let i = 1; i <= 3; i++) {
    const tmp = b;
    b = a + b;
    a = tmp;
  }

  return b;
}
