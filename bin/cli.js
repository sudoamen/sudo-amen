#!/usr/bin/env node
import { affirm, banner } from "../src/index.js";

const args = process.argv.slice(2);

if (args.includes("--banner")) {
  console.log(banner());
} else {
  console.log(affirm());
}