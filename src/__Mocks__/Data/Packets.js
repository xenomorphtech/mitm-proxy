import { hex } from "./Hex";

const hexStr = hex.replace(/[ \n]/g, "");

const quantum = 4;
const offset = 16;

export const packets = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  // .map(v => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).flat()
  // .map(v => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).flat()
  // .map(v => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).flat()
  .map(v => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]).flat().map((v) => {
    const len = parseInt((Math.random() * 256) / quantum) * quantum;
    const str = hexStr.slice(len, len + len);
    const lines = str.match(/.{1,32}/g) || [];
    const size = 16 + (lines.length * 22);
    return { len, lines, offset, quantum, size };
  });
