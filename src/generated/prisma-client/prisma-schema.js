module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type Address {
  id: ID!
  zipcode: String!
  street: String!
  neighborhood: String!
  number: String!
  city: String!
  country: String!
  state: String!
  complement: String
}

type AddressConnection {
  pageInfo: PageInfo!
  edges: [AddressEdge]!
  aggregate: AggregateAddress!
}

input AddressCreateInput {
  id: ID
  zipcode: String!
  street: String!
  neighborhood: String!
  number: String!
  city: String!
  country: String!
  state: String!
  complement: String
}

input AddressCreateManyInput {
  create: [AddressCreateInput!]
  connect: [AddressWhereUniqueInput!]
}

type AddressEdge {
  node: Address!
  cursor: String!
}

enum AddressOrderByInput {
  id_ASC
  id_DESC
  zipcode_ASC
  zipcode_DESC
  street_ASC
  street_DESC
  neighborhood_ASC
  neighborhood_DESC
  number_ASC
  number_DESC
  city_ASC
  city_DESC
  country_ASC
  country_DESC
  state_ASC
  state_DESC
  complement_ASC
  complement_DESC
}

type AddressPreviousValues {
  id: ID!
  zipcode: String!
  street: String!
  neighborhood: String!
  number: String!
  city: String!
  country: String!
  state: String!
  complement: String
}

input AddressScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  zipcode: String
  zipcode_not: String
  zipcode_in: [String!]
  zipcode_not_in: [String!]
  zipcode_lt: String
  zipcode_lte: String
  zipcode_gt: String
  zipcode_gte: String
  zipcode_contains: String
  zipcode_not_contains: String
  zipcode_starts_with: String
  zipcode_not_starts_with: String
  zipcode_ends_with: String
  zipcode_not_ends_with: String
  street: String
  street_not: String
  street_in: [String!]
  street_not_in: [String!]
  street_lt: String
  street_lte: String
  street_gt: String
  street_gte: String
  street_contains: String
  street_not_contains: String
  street_starts_with: String
  street_not_starts_with: String
  street_ends_with: String
  street_not_ends_with: String
  neighborhood: String
  neighborhood_not: String
  neighborhood_in: [String!]
  neighborhood_not_in: [String!]
  neighborhood_lt: String
  neighborhood_lte: String
  neighborhood_gt: String
  neighborhood_gte: String
  neighborhood_contains: String
  neighborhood_not_contains: String
  neighborhood_starts_with: String
  neighborhood_not_starts_with: String
  neighborhood_ends_with: String
  neighborhood_not_ends_with: String
  number: String
  number_not: String
  number_in: [String!]
  number_not_in: [String!]
  number_lt: String
  number_lte: String
  number_gt: String
  number_gte: String
  number_contains: String
  number_not_contains: String
  number_starts_with: String
  number_not_starts_with: String
  number_ends_with: String
  number_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  complement: String
  complement_not: String
  complement_in: [String!]
  complement_not_in: [String!]
  complement_lt: String
  complement_lte: String
  complement_gt: String
  complement_gte: String
  complement_contains: String
  complement_not_contains: String
  complement_starts_with: String
  complement_not_starts_with: String
  complement_ends_with: String
  complement_not_ends_with: String
  AND: [AddressScalarWhereInput!]
  OR: [AddressScalarWhereInput!]
  NOT: [AddressScalarWhereInput!]
}

type AddressSubscriptionPayload {
  mutation: MutationType!
  node: Address
  updatedFields: [String!]
  previousValues: AddressPreviousValues
}

input AddressSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AddressWhereInput
  AND: [AddressSubscriptionWhereInput!]
  OR: [AddressSubscriptionWhereInput!]
  NOT: [AddressSubscriptionWhereInput!]
}

input AddressUpdateDataInput {
  zipcode: String
  street: String
  neighborhood: String
  number: String
  city: String
  country: String
  state: String
  complement: String
}

input AddressUpdateInput {
  zipcode: String
  street: String
  neighborhood: String
  number: String
  city: String
  country: String
  state: String
  complement: String
}

input AddressUpdateManyDataInput {
  zipcode: String
  street: String
  neighborhood: String
  number: String
  city: String
  country: String
  state: String
  complement: String
}

input AddressUpdateManyInput {
  create: [AddressCreateInput!]
  update: [AddressUpdateWithWhereUniqueNestedInput!]
  upsert: [AddressUpsertWithWhereUniqueNestedInput!]
  delete: [AddressWhereUniqueInput!]
  connect: [AddressWhereUniqueInput!]
  set: [AddressWhereUniqueInput!]
  disconnect: [AddressWhereUniqueInput!]
  deleteMany: [AddressScalarWhereInput!]
  updateMany: [AddressUpdateManyWithWhereNestedInput!]
}

input AddressUpdateManyMutationInput {
  zipcode: String
  street: String
  neighborhood: String
  number: String
  city: String
  country: String
  state: String
  complement: String
}

input AddressUpdateManyWithWhereNestedInput {
  where: AddressScalarWhereInput!
  data: AddressUpdateManyDataInput!
}

input AddressUpdateWithWhereUniqueNestedInput {
  where: AddressWhereUniqueInput!
  data: AddressUpdateDataInput!
}

input AddressUpsertWithWhereUniqueNestedInput {
  where: AddressWhereUniqueInput!
  update: AddressUpdateDataInput!
  create: AddressCreateInput!
}

input AddressWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  zipcode: String
  zipcode_not: String
  zipcode_in: [String!]
  zipcode_not_in: [String!]
  zipcode_lt: String
  zipcode_lte: String
  zipcode_gt: String
  zipcode_gte: String
  zipcode_contains: String
  zipcode_not_contains: String
  zipcode_starts_with: String
  zipcode_not_starts_with: String
  zipcode_ends_with: String
  zipcode_not_ends_with: String
  street: String
  street_not: String
  street_in: [String!]
  street_not_in: [String!]
  street_lt: String
  street_lte: String
  street_gt: String
  street_gte: String
  street_contains: String
  street_not_contains: String
  street_starts_with: String
  street_not_starts_with: String
  street_ends_with: String
  street_not_ends_with: String
  neighborhood: String
  neighborhood_not: String
  neighborhood_in: [String!]
  neighborhood_not_in: [String!]
  neighborhood_lt: String
  neighborhood_lte: String
  neighborhood_gt: String
  neighborhood_gte: String
  neighborhood_contains: String
  neighborhood_not_contains: String
  neighborhood_starts_with: String
  neighborhood_not_starts_with: String
  neighborhood_ends_with: String
  neighborhood_not_ends_with: String
  number: String
  number_not: String
  number_in: [String!]
  number_not_in: [String!]
  number_lt: String
  number_lte: String
  number_gt: String
  number_gte: String
  number_contains: String
  number_not_contains: String
  number_starts_with: String
  number_not_starts_with: String
  number_ends_with: String
  number_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  complement: String
  complement_not: String
  complement_in: [String!]
  complement_not_in: [String!]
  complement_lt: String
  complement_lte: String
  complement_gt: String
  complement_gte: String
  complement_contains: String
  complement_not_contains: String
  complement_starts_with: String
  complement_not_starts_with: String
  complement_ends_with: String
  complement_not_ends_with: String
  AND: [AddressWhereInput!]
  OR: [AddressWhereInput!]
  NOT: [AddressWhereInput!]
}

input AddressWhereUniqueInput {
  id: ID
}

type AggregateAddress {
  count: Int!
}

type AggregateAssessment {
  count: Int!
}

type AggregateProvider {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Assessment {
  id: ID!
  owner: User!
  description: String!
  title: String!
  star: Stars
}

type AssessmentConnection {
  pageInfo: PageInfo!
  edges: [AssessmentEdge]!
  aggregate: AggregateAssessment!
}

input AssessmentCreateInput {
  id: ID
  owner: UserCreateOneWithoutAssessmentsInput!
  description: String!
  title: String!
  star: Stars
}

input AssessmentCreateManyInput {
  create: [AssessmentCreateInput!]
  connect: [AssessmentWhereUniqueInput!]
}

input AssessmentCreateManyWithoutOwnerInput {
  create: [AssessmentCreateWithoutOwnerInput!]
  connect: [AssessmentWhereUniqueInput!]
}

input AssessmentCreateWithoutOwnerInput {
  id: ID
  description: String!
  title: String!
  star: Stars
}

type AssessmentEdge {
  node: Assessment!
  cursor: String!
}

enum AssessmentOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  title_ASC
  title_DESC
  star_ASC
  star_DESC
}

type AssessmentPreviousValues {
  id: ID!
  description: String!
  title: String!
  star: Stars
}

input AssessmentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  star: Stars
  star_not: Stars
  star_in: [Stars!]
  star_not_in: [Stars!]
  AND: [AssessmentScalarWhereInput!]
  OR: [AssessmentScalarWhereInput!]
  NOT: [AssessmentScalarWhereInput!]
}

type AssessmentSubscriptionPayload {
  mutation: MutationType!
  node: Assessment
  updatedFields: [String!]
  previousValues: AssessmentPreviousValues
}

input AssessmentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AssessmentWhereInput
  AND: [AssessmentSubscriptionWhereInput!]
  OR: [AssessmentSubscriptionWhereInput!]
  NOT: [AssessmentSubscriptionWhereInput!]
}

input AssessmentUpdateDataInput {
  owner: UserUpdateOneRequiredWithoutAssessmentsInput
  description: String
  title: String
  star: Stars
}

input AssessmentUpdateInput {
  owner: UserUpdateOneRequiredWithoutAssessmentsInput
  description: String
  title: String
  star: Stars
}

input AssessmentUpdateManyDataInput {
  description: String
  title: String
  star: Stars
}

input AssessmentUpdateManyInput {
  create: [AssessmentCreateInput!]
  update: [AssessmentUpdateWithWhereUniqueNestedInput!]
  upsert: [AssessmentUpsertWithWhereUniqueNestedInput!]
  delete: [AssessmentWhereUniqueInput!]
  connect: [AssessmentWhereUniqueInput!]
  set: [AssessmentWhereUniqueInput!]
  disconnect: [AssessmentWhereUniqueInput!]
  deleteMany: [AssessmentScalarWhereInput!]
  updateMany: [AssessmentUpdateManyWithWhereNestedInput!]
}

input AssessmentUpdateManyMutationInput {
  description: String
  title: String
  star: Stars
}

input AssessmentUpdateManyWithoutOwnerInput {
  create: [AssessmentCreateWithoutOwnerInput!]
  delete: [AssessmentWhereUniqueInput!]
  connect: [AssessmentWhereUniqueInput!]
  set: [AssessmentWhereUniqueInput!]
  disconnect: [AssessmentWhereUniqueInput!]
  update: [AssessmentUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [AssessmentUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [AssessmentScalarWhereInput!]
  updateMany: [AssessmentUpdateManyWithWhereNestedInput!]
}

input AssessmentUpdateManyWithWhereNestedInput {
  where: AssessmentScalarWhereInput!
  data: AssessmentUpdateManyDataInput!
}

input AssessmentUpdateWithoutOwnerDataInput {
  description: String
  title: String
  star: Stars
}

input AssessmentUpdateWithWhereUniqueNestedInput {
  where: AssessmentWhereUniqueInput!
  data: AssessmentUpdateDataInput!
}

input AssessmentUpdateWithWhereUniqueWithoutOwnerInput {
  where: AssessmentWhereUniqueInput!
  data: AssessmentUpdateWithoutOwnerDataInput!
}

input AssessmentUpsertWithWhereUniqueNestedInput {
  where: AssessmentWhereUniqueInput!
  update: AssessmentUpdateDataInput!
  create: AssessmentCreateInput!
}

input AssessmentUpsertWithWhereUniqueWithoutOwnerInput {
  where: AssessmentWhereUniqueInput!
  update: AssessmentUpdateWithoutOwnerDataInput!
  create: AssessmentCreateWithoutOwnerInput!
}

input AssessmentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  owner: UserWhereInput
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  star: Stars
  star_not: Stars
  star_in: [Stars!]
  star_not_in: [Stars!]
  AND: [AssessmentWhereInput!]
  OR: [AssessmentWhereInput!]
  NOT: [AssessmentWhereInput!]
}

input AssessmentWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createAddress(data: AddressCreateInput!): Address!
  updateAddress(data: AddressUpdateInput!, where: AddressWhereUniqueInput!): Address
  updateManyAddresses(data: AddressUpdateManyMutationInput!, where: AddressWhereInput): BatchPayload!
  upsertAddress(where: AddressWhereUniqueInput!, create: AddressCreateInput!, update: AddressUpdateInput!): Address!
  deleteAddress(where: AddressWhereUniqueInput!): Address
  deleteManyAddresses(where: AddressWhereInput): BatchPayload!
  createAssessment(data: AssessmentCreateInput!): Assessment!
  updateAssessment(data: AssessmentUpdateInput!, where: AssessmentWhereUniqueInput!): Assessment
  updateManyAssessments(data: AssessmentUpdateManyMutationInput!, where: AssessmentWhereInput): BatchPayload!
  upsertAssessment(where: AssessmentWhereUniqueInput!, create: AssessmentCreateInput!, update: AssessmentUpdateInput!): Assessment!
  deleteAssessment(where: AssessmentWhereUniqueInput!): Assessment
  deleteManyAssessments(where: AssessmentWhereInput): BatchPayload!
  createProvider(data: ProviderCreateInput!): Provider!
  updateProvider(data: ProviderUpdateInput!, where: ProviderWhereUniqueInput!): Provider
  updateManyProviders(data: ProviderUpdateManyMutationInput!, where: ProviderWhereInput): BatchPayload!
  upsertProvider(where: ProviderWhereUniqueInput!, create: ProviderCreateInput!, update: ProviderUpdateInput!): Provider!
  deleteProvider(where: ProviderWhereUniqueInput!): Provider
  deleteManyProviders(where: ProviderWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Provider {
  id: ID!
  email: String!
  phone: String!
  name: String!
  type: String
  assessments(where: AssessmentWhereInput, orderBy: AssessmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Assessment!]
  description: String
  address(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address!]
}

type ProviderConnection {
  pageInfo: PageInfo!
  edges: [ProviderEdge]!
  aggregate: AggregateProvider!
}

input ProviderCreateInput {
  id: ID
  email: String!
  phone: String!
  name: String!
  type: String
  assessments: AssessmentCreateManyInput
  description: String
  address: AddressCreateManyInput
}

type ProviderEdge {
  node: Provider!
  cursor: String!
}

enum ProviderOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  phone_ASC
  phone_DESC
  name_ASC
  name_DESC
  type_ASC
  type_DESC
  description_ASC
  description_DESC
}

type ProviderPreviousValues {
  id: ID!
  email: String!
  phone: String!
  name: String!
  type: String
  description: String
}

type ProviderSubscriptionPayload {
  mutation: MutationType!
  node: Provider
  updatedFields: [String!]
  previousValues: ProviderPreviousValues
}

input ProviderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProviderWhereInput
  AND: [ProviderSubscriptionWhereInput!]
  OR: [ProviderSubscriptionWhereInput!]
  NOT: [ProviderSubscriptionWhereInput!]
}

input ProviderUpdateInput {
  email: String
  phone: String
  name: String
  type: String
  assessments: AssessmentUpdateManyInput
  description: String
  address: AddressUpdateManyInput
}

input ProviderUpdateManyMutationInput {
  email: String
  phone: String
  name: String
  type: String
  description: String
}

input ProviderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  assessments_every: AssessmentWhereInput
  assessments_some: AssessmentWhereInput
  assessments_none: AssessmentWhereInput
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  address_every: AddressWhereInput
  address_some: AddressWhereInput
  address_none: AddressWhereInput
  AND: [ProviderWhereInput!]
  OR: [ProviderWhereInput!]
  NOT: [ProviderWhereInput!]
}

input ProviderWhereUniqueInput {
  id: ID
  email: String
  phone: String
}

type Query {
  address(where: AddressWhereUniqueInput!): Address
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address]!
  addressesConnection(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AddressConnection!
  assessment(where: AssessmentWhereUniqueInput!): Assessment
  assessments(where: AssessmentWhereInput, orderBy: AssessmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Assessment]!
  assessmentsConnection(where: AssessmentWhereInput, orderBy: AssessmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AssessmentConnection!
  provider(where: ProviderWhereUniqueInput!): Provider
  providers(where: ProviderWhereInput, orderBy: ProviderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Provider]!
  providersConnection(where: ProviderWhereInput, orderBy: ProviderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProviderConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Stars {
  ONE
  TWO
  THREE
  FOUR
  FIVE
}

type Subscription {
  address(where: AddressSubscriptionWhereInput): AddressSubscriptionPayload
  assessment(where: AssessmentSubscriptionWhereInput): AssessmentSubscriptionPayload
  provider(where: ProviderSubscriptionWhereInput): ProviderSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  phone: String!
  document: String!
  password: String!
  name: String!
  lastname: String!
  address(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address!]
  assessments(where: AssessmentWhereInput, orderBy: AssessmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Assessment!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  phone: String!
  document: String!
  password: String!
  name: String!
  lastname: String!
  address: AddressCreateManyInput
  assessments: AssessmentCreateManyWithoutOwnerInput
}

input UserCreateOneWithoutAssessmentsInput {
  create: UserCreateWithoutAssessmentsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAssessmentsInput {
  id: ID
  email: String!
  phone: String!
  document: String!
  password: String!
  name: String!
  lastname: String!
  address: AddressCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  phone_ASC
  phone_DESC
  document_ASC
  document_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  lastname_ASC
  lastname_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  phone: String!
  document: String!
  password: String!
  name: String!
  lastname: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  phone: String
  document: String
  password: String
  name: String
  lastname: String
  address: AddressUpdateManyInput
  assessments: AssessmentUpdateManyWithoutOwnerInput
}

input UserUpdateManyMutationInput {
  email: String
  phone: String
  document: String
  password: String
  name: String
  lastname: String
}

input UserUpdateOneRequiredWithoutAssessmentsInput {
  create: UserCreateWithoutAssessmentsInput
  update: UserUpdateWithoutAssessmentsDataInput
  upsert: UserUpsertWithoutAssessmentsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutAssessmentsDataInput {
  email: String
  phone: String
  document: String
  password: String
  name: String
  lastname: String
  address: AddressUpdateManyInput
}

input UserUpsertWithoutAssessmentsInput {
  update: UserUpdateWithoutAssessmentsDataInput!
  create: UserCreateWithoutAssessmentsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  document: String
  document_not: String
  document_in: [String!]
  document_not_in: [String!]
  document_lt: String
  document_lte: String
  document_gt: String
  document_gte: String
  document_contains: String
  document_not_contains: String
  document_starts_with: String
  document_not_starts_with: String
  document_ends_with: String
  document_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  lastname: String
  lastname_not: String
  lastname_in: [String!]
  lastname_not_in: [String!]
  lastname_lt: String
  lastname_lte: String
  lastname_gt: String
  lastname_gte: String
  lastname_contains: String
  lastname_not_contains: String
  lastname_starts_with: String
  lastname_not_starts_with: String
  lastname_ends_with: String
  lastname_not_ends_with: String
  address_every: AddressWhereInput
  address_some: AddressWhereInput
  address_none: AddressWhereInput
  assessments_every: AssessmentWhereInput
  assessments_some: AssessmentWhereInput
  assessments_none: AssessmentWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    