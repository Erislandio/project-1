"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Stars",
    embedded: false
  },
  {
    name: "Provider",
    embedded: false
  },
  {
    name: "Assessment",
    embedded: false
  },
  {
    name: "Address",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/erislandio-25285a/demo/dev`
});
exports.prisma = new exports.Prisma();
