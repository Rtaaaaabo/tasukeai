/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateCategory: OnCreateCategorySubscription;
  onUpdateCategory: OnUpdateCategorySubscription;
  onDeleteCategory: OnDeleteCategorySubscription;
  onCreateActivityArea: OnCreateActivityAreaSubscription;
  onUpdateActivityArea: OnUpdateActivityAreaSubscription;
  onDeleteActivityArea: OnDeleteActivityAreaSubscription;
  onCreateOrganization: OnCreateOrganizationSubscription;
  onUpdateOrganization: OnUpdateOrganizationSubscription;
  onDeleteOrganization: OnDeleteOrganizationSubscription;
  onCreateMember: OnCreateMemberSubscription;
  onUpdateMember: OnUpdateMemberSubscription;
  onDeleteMember: OnDeleteMemberSubscription;
  onCreateUser: OnCreateUserSubscription;
  onUpdateUser: OnUpdateUserSubscription;
  onDeleteUser: OnDeleteUserSubscription;
  onCreateRoom: OnCreateRoomSubscription;
  onUpdateRoom: OnUpdateRoomSubscription;
  onDeleteRoom: OnDeleteRoomSubscription;
  onCreateChatMessage: OnCreateChatMessageSubscription;
  onUpdateChatMessage: OnUpdateChatMessageSubscription;
  onDeleteChatMessage: OnDeleteChatMessageSubscription;
  onCreateCategoryTags: OnCreateCategoryTagsSubscription;
  onUpdateCategoryTags: OnUpdateCategoryTagsSubscription;
  onDeleteCategoryTags: OnDeleteCategoryTagsSubscription;
  onCreateActivityAreaTags: OnCreateActivityAreaTagsSubscription;
  onUpdateActivityAreaTags: OnUpdateActivityAreaTagsSubscription;
  onDeleteActivityAreaTags: OnDeleteActivityAreaTagsSubscription;
  onCreateOrganizationTags: OnCreateOrganizationTagsSubscription;
  onUpdateOrganizationTags: OnUpdateOrganizationTagsSubscription;
  onDeleteOrganizationTags: OnDeleteOrganizationTagsSubscription;
};

export type CreateCategoryInput = {
  id?: string | null;
  value: number;
  name: string;
  description?: string | null;
};

export type ModelCategoryConditionInput = {
  value?: ModelIntInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Category = {
  __typename: "Category";
  id: string;
  value: number;
  name: string;
  description?: string | null;
  organization?: ModelCategoryTagsConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelCategoryTagsConnection = {
  __typename: "ModelCategoryTagsConnection";
  items: Array<CategoryTags | null>;
  nextToken?: string | null;
};

export type CategoryTags = {
  __typename: "CategoryTags";
  id: string;
  categoryID: string;
  organizationID: string;
  category: Category;
  organization: Organization;
  createdAt: string;
  updatedAt: string;
};

export type Organization = {
  __typename: "Organization";
  id: string;
  CompetentAuthority: string;
  name: string;
  address: string;
  representativeName: string;
  establishmentDate: string;
  purpose: string;
  activityAreas?: ModelActivityAreaTagsConnection | null;
  corporateNumber: number;
  registeredDate: string;
  website?: string | null;
  categories?: ModelCategoryTagsConnection | null;
  users?: ModelOrganizationTagsConnection | null;
  members?: ModelMemberConnection | null;
  room?: ModelRoomConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelActivityAreaTagsConnection = {
  __typename: "ModelActivityAreaTagsConnection";
  items: Array<ActivityAreaTags | null>;
  nextToken?: string | null;
};

export type ActivityAreaTags = {
  __typename: "ActivityAreaTags";
  id: string;
  activityAreaID: string;
  organizationID: string;
  activityArea: ActivityArea;
  organization: Organization;
  createdAt: string;
  updatedAt: string;
};

export type ActivityArea = {
  __typename: "ActivityArea";
  id: string;
  value: number;
  name: string;
  organization?: ModelActivityAreaTagsConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelOrganizationTagsConnection = {
  __typename: "ModelOrganizationTagsConnection";
  items: Array<OrganizationTags | null>;
  nextToken?: string | null;
};

export type OrganizationTags = {
  __typename: "OrganizationTags";
  id: string;
  organizationID: string;
  userID: string;
  organization: Organization;
  user: User;
  createdAt: string;
  updatedAt: string;
};

export type User = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  organization?: ModelOrganizationTagsConnection | null;
  member?: Member | null;
  room?: ModelRoomConnection | null;
  createdAt: string;
  updatedAt: string;
  userMemberId?: string | null;
};

export type Member = {
  __typename: "Member";
  id: string;
  orgId: string;
  firstName: string;
  lastName: string;
  email: string;
  organization: Organization;
  user?: User | null;
  createdAt: string;
  updatedAt: string;
  memberUserId?: string | null;
  organizationMembersId?: string | null;
};

export type ModelRoomConnection = {
  __typename: "ModelRoomConnection";
  items: Array<Room | null>;
  nextToken?: string | null;
};

export type Room = {
  __typename: "Room";
  id: string;
  organization: Organization;
  user: User;
  members?: Array<Member | null> | null;
  chatMessage?: ModelChatMessageConnection | null;
  createdAt: string;
  updatedAt: string;
  organizationRoomId?: string | null;
  userRoomId?: string | null;
};

export type ModelChatMessageConnection = {
  __typename: "ModelChatMessageConnection";
  items: Array<ChatMessage | null>;
  nextToken?: string | null;
};

export type ChatMessage = {
  __typename: "ChatMessage";
  id: string;
  createdAt: string;
  updateAt: string;
  content: string;
  room: Room;
  updatedAt: string;
  roomChatMessageId?: string | null;
};

export type ModelMemberConnection = {
  __typename: "ModelMemberConnection";
  items: Array<Member | null>;
  nextToken?: string | null;
};

export type UpdateCategoryInput = {
  id: string;
  value?: number | null;
  name?: string | null;
  description?: string | null;
};

export type DeleteCategoryInput = {
  id: string;
};

export type CreateActivityAreaInput = {
  id?: string | null;
  value: number;
  name: string;
};

export type ModelActivityAreaConditionInput = {
  value?: ModelIntInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelActivityAreaConditionInput | null> | null;
  or?: Array<ModelActivityAreaConditionInput | null> | null;
  not?: ModelActivityAreaConditionInput | null;
};

export type UpdateActivityAreaInput = {
  id: string;
  value?: number | null;
  name?: string | null;
};

export type DeleteActivityAreaInput = {
  id: string;
};

export type CreateOrganizationInput = {
  id?: string | null;
  CompetentAuthority: string;
  name: string;
  address: string;
  representativeName: string;
  establishmentDate: string;
  purpose: string;
  corporateNumber: number;
  registeredDate: string;
  website?: string | null;
};

export type ModelOrganizationConditionInput = {
  CompetentAuthority?: ModelStringInput | null;
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  representativeName?: ModelStringInput | null;
  establishmentDate?: ModelStringInput | null;
  purpose?: ModelStringInput | null;
  corporateNumber?: ModelIntInput | null;
  registeredDate?: ModelStringInput | null;
  website?: ModelStringInput | null;
  and?: Array<ModelOrganizationConditionInput | null> | null;
  or?: Array<ModelOrganizationConditionInput | null> | null;
  not?: ModelOrganizationConditionInput | null;
};

export type UpdateOrganizationInput = {
  id: string;
  CompetentAuthority?: string | null;
  name?: string | null;
  address?: string | null;
  representativeName?: string | null;
  establishmentDate?: string | null;
  purpose?: string | null;
  corporateNumber?: number | null;
  registeredDate?: string | null;
  website?: string | null;
};

export type DeleteOrganizationInput = {
  id: string;
};

export type CreateMemberInput = {
  id?: string | null;
  orgId: string;
  firstName: string;
  lastName: string;
  email: string;
  memberUserId?: string | null;
  organizationMembersId?: string | null;
};

export type ModelMemberConditionInput = {
  orgId?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelMemberConditionInput | null> | null;
  or?: Array<ModelMemberConditionInput | null> | null;
  not?: ModelMemberConditionInput | null;
  memberUserId?: ModelIDInput | null;
  organizationMembersId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateMemberInput = {
  id: string;
  orgId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  memberUserId?: string | null;
  organizationMembersId?: string | null;
};

export type DeleteMemberInput = {
  id: string;
};

export type CreateUserInput = {
  id?: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  userMemberId?: string | null;
};

export type ModelUserConditionInput = {
  id?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phoneNumber?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
  userMemberId?: ModelIDInput | null;
};

export type UpdateUserInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  userMemberId?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateRoomInput = {
  id?: string | null;
  organizationRoomId?: string | null;
  userRoomId?: string | null;
};

export type ModelRoomConditionInput = {
  and?: Array<ModelRoomConditionInput | null> | null;
  or?: Array<ModelRoomConditionInput | null> | null;
  not?: ModelRoomConditionInput | null;
  organizationRoomId?: ModelIDInput | null;
  userRoomId?: ModelIDInput | null;
};

export type UpdateRoomInput = {
  id: string;
  organizationRoomId?: string | null;
  userRoomId?: string | null;
};

export type DeleteRoomInput = {
  id: string;
};

export type CreateChatMessageInput = {
  id?: string | null;
  createdAt?: string | null;
  updateAt: string;
  content: string;
  roomChatMessageId?: string | null;
};

export type ModelChatMessageConditionInput = {
  createdAt?: ModelStringInput | null;
  updateAt?: ModelStringInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelChatMessageConditionInput | null> | null;
  or?: Array<ModelChatMessageConditionInput | null> | null;
  not?: ModelChatMessageConditionInput | null;
  roomChatMessageId?: ModelIDInput | null;
};

export type UpdateChatMessageInput = {
  id: string;
  createdAt?: string | null;
  updateAt?: string | null;
  content?: string | null;
  roomChatMessageId?: string | null;
};

export type DeleteChatMessageInput = {
  id: string;
};

export type CreateCategoryTagsInput = {
  id?: string | null;
  categoryID: string;
  organizationID: string;
};

export type ModelCategoryTagsConditionInput = {
  categoryID?: ModelIDInput | null;
  organizationID?: ModelIDInput | null;
  and?: Array<ModelCategoryTagsConditionInput | null> | null;
  or?: Array<ModelCategoryTagsConditionInput | null> | null;
  not?: ModelCategoryTagsConditionInput | null;
};

export type UpdateCategoryTagsInput = {
  id: string;
  categoryID?: string | null;
  organizationID?: string | null;
};

export type DeleteCategoryTagsInput = {
  id: string;
};

export type CreateActivityAreaTagsInput = {
  id?: string | null;
  activityAreaID: string;
  organizationID: string;
};

export type ModelActivityAreaTagsConditionInput = {
  activityAreaID?: ModelIDInput | null;
  organizationID?: ModelIDInput | null;
  and?: Array<ModelActivityAreaTagsConditionInput | null> | null;
  or?: Array<ModelActivityAreaTagsConditionInput | null> | null;
  not?: ModelActivityAreaTagsConditionInput | null;
};

export type UpdateActivityAreaTagsInput = {
  id: string;
  activityAreaID?: string | null;
  organizationID?: string | null;
};

export type DeleteActivityAreaTagsInput = {
  id: string;
};

export type CreateOrganizationTagsInput = {
  id?: string | null;
  organizationID: string;
  userID: string;
};

export type ModelOrganizationTagsConditionInput = {
  organizationID?: ModelIDInput | null;
  userID?: ModelStringInput | null;
  and?: Array<ModelOrganizationTagsConditionInput | null> | null;
  or?: Array<ModelOrganizationTagsConditionInput | null> | null;
  not?: ModelOrganizationTagsConditionInput | null;
};

export type UpdateOrganizationTagsInput = {
  id: string;
  organizationID?: string | null;
  userID?: string | null;
};

export type DeleteOrganizationTagsInput = {
  id: string;
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  value?: ModelIntInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection";
  items: Array<Category | null>;
  nextToken?: string | null;
};

export type ModelActivityAreaFilterInput = {
  id?: ModelIDInput | null;
  value?: ModelIntInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelActivityAreaFilterInput | null> | null;
  or?: Array<ModelActivityAreaFilterInput | null> | null;
  not?: ModelActivityAreaFilterInput | null;
};

export type ModelActivityAreaConnection = {
  __typename: "ModelActivityAreaConnection";
  items: Array<ActivityArea | null>;
  nextToken?: string | null;
};

export type ModelOrganizationFilterInput = {
  id?: ModelIDInput | null;
  CompetentAuthority?: ModelStringInput | null;
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  representativeName?: ModelStringInput | null;
  establishmentDate?: ModelStringInput | null;
  purpose?: ModelStringInput | null;
  corporateNumber?: ModelIntInput | null;
  registeredDate?: ModelStringInput | null;
  website?: ModelStringInput | null;
  and?: Array<ModelOrganizationFilterInput | null> | null;
  or?: Array<ModelOrganizationFilterInput | null> | null;
  not?: ModelOrganizationFilterInput | null;
};

export type ModelOrganizationConnection = {
  __typename: "ModelOrganizationConnection";
  items: Array<Organization | null>;
  nextToken?: string | null;
};

export type ModelMemberFilterInput = {
  id?: ModelIDInput | null;
  orgId?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelMemberFilterInput | null> | null;
  or?: Array<ModelMemberFilterInput | null> | null;
  not?: ModelMemberFilterInput | null;
  memberUserId?: ModelIDInput | null;
  organizationMembersId?: ModelIDInput | null;
};

export type ModelUserFilterInput = {
  id?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phoneNumber?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
  userMemberId?: ModelIDInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelRoomFilterInput | null> | null;
  or?: Array<ModelRoomFilterInput | null> | null;
  not?: ModelRoomFilterInput | null;
  organizationRoomId?: ModelIDInput | null;
  userRoomId?: ModelIDInput | null;
};

export type ModelChatMessageFilterInput = {
  id?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updateAt?: ModelStringInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelChatMessageFilterInput | null> | null;
  or?: Array<ModelChatMessageFilterInput | null> | null;
  not?: ModelChatMessageFilterInput | null;
  roomChatMessageId?: ModelIDInput | null;
};

export type ModelCategoryTagsFilterInput = {
  id?: ModelIDInput | null;
  categoryID?: ModelIDInput | null;
  organizationID?: ModelIDInput | null;
  and?: Array<ModelCategoryTagsFilterInput | null> | null;
  or?: Array<ModelCategoryTagsFilterInput | null> | null;
  not?: ModelCategoryTagsFilterInput | null;
};

export type ModelActivityAreaTagsFilterInput = {
  id?: ModelIDInput | null;
  activityAreaID?: ModelIDInput | null;
  organizationID?: ModelIDInput | null;
  and?: Array<ModelActivityAreaTagsFilterInput | null> | null;
  or?: Array<ModelActivityAreaTagsFilterInput | null> | null;
  not?: ModelActivityAreaTagsFilterInput | null;
};

export type ModelOrganizationTagsFilterInput = {
  id?: ModelIDInput | null;
  organizationID?: ModelIDInput | null;
  userID?: ModelStringInput | null;
  and?: Array<ModelOrganizationTagsFilterInput | null> | null;
  or?: Array<ModelOrganizationTagsFilterInput | null> | null;
  not?: ModelOrganizationTagsFilterInput | null;
};

export type CreateCategoryMutation = {
  __typename: "Category";
  id: string;
  value: number;
  name: string;
  description?: string | null;
  organization?: {
    __typename: "ModelCategoryTagsConnection";
    items: Array<{
      __typename: "CategoryTags";
      id: string;
      categoryID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCategoryMutation = {
  __typename: "Category";
  id: string;
  value: number;
  name: string;
  description?: string | null;
  organization?: {
    __typename: "ModelCategoryTagsConnection";
    items: Array<{
      __typename: "CategoryTags";
      id: string;
      categoryID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCategoryMutation = {
  __typename: "Category";
  id: string;
  value: number;
  name: string;
  description?: string | null;
  organization?: {
    __typename: "ModelCategoryTagsConnection";
    items: Array<{
      __typename: "CategoryTags";
      id: string;
      categoryID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateActivityAreaMutation = {
  __typename: "ActivityArea";
  id: string;
  value: number;
  name: string;
  organization?: {
    __typename: "ModelActivityAreaTagsConnection";
    items: Array<{
      __typename: "ActivityAreaTags";
      id: string;
      activityAreaID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateActivityAreaMutation = {
  __typename: "ActivityArea";
  id: string;
  value: number;
  name: string;
  organization?: {
    __typename: "ModelActivityAreaTagsConnection";
    items: Array<{
      __typename: "ActivityAreaTags";
      id: string;
      activityAreaID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteActivityAreaMutation = {
  __typename: "ActivityArea";
  id: string;
  value: number;
  name: string;
  organization?: {
    __typename: "ModelActivityAreaTagsConnection";
    items: Array<{
      __typename: "ActivityAreaTags";
      id: string;
      activityAreaID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateOrganizationMutation = {
  __typename: "Organization";
  id: string;
  CompetentAuthority: string;
  name: string;
  address: string;
  representativeName: string;
  establishmentDate: string;
  purpose: string;
  activityAreas?: {
    __typename: "ModelActivityAreaTagsConnection";
    items: Array<{
      __typename: "ActivityAreaTags";
      id: string;
      activityAreaID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  corporateNumber: number;
  registeredDate: string;
  website?: string | null;
  categories?: {
    __typename: "ModelCategoryTagsConnection";
    items: Array<{
      __typename: "CategoryTags";
      id: string;
      categoryID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelOrganizationTagsConnection";
    items: Array<{
      __typename: "OrganizationTags";
      id: string;
      organizationID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  members?: {
    __typename: "ModelMemberConnection";
    items: Array<{
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      createdAt: string;
      updatedAt: string;
      organizationRoomId?: string | null;
      userRoomId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOrganizationMutation = {
  __typename: "Organization";
  id: string;
  CompetentAuthority: string;
  name: string;
  address: string;
  representativeName: string;
  establishmentDate: string;
  purpose: string;
  activityAreas?: {
    __typename: "ModelActivityAreaTagsConnection";
    items: Array<{
      __typename: "ActivityAreaTags";
      id: string;
      activityAreaID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  corporateNumber: number;
  registeredDate: string;
  website?: string | null;
  categories?: {
    __typename: "ModelCategoryTagsConnection";
    items: Array<{
      __typename: "CategoryTags";
      id: string;
      categoryID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelOrganizationTagsConnection";
    items: Array<{
      __typename: "OrganizationTags";
      id: string;
      organizationID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  members?: {
    __typename: "ModelMemberConnection";
    items: Array<{
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      createdAt: string;
      updatedAt: string;
      organizationRoomId?: string | null;
      userRoomId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteOrganizationMutation = {
  __typename: "Organization";
  id: string;
  CompetentAuthority: string;
  name: string;
  address: string;
  representativeName: string;
  establishmentDate: string;
  purpose: string;
  activityAreas?: {
    __typename: "ModelActivityAreaTagsConnection";
    items: Array<{
      __typename: "ActivityAreaTags";
      id: string;
      activityAreaID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  corporateNumber: number;
  registeredDate: string;
  website?: string | null;
  categories?: {
    __typename: "ModelCategoryTagsConnection";
    items: Array<{
      __typename: "CategoryTags";
      id: string;
      categoryID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelOrganizationTagsConnection";
    items: Array<{
      __typename: "OrganizationTags";
      id: string;
      organizationID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  members?: {
    __typename: "ModelMemberConnection";
    items: Array<{
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      createdAt: string;
      updatedAt: string;
      organizationRoomId?: string | null;
      userRoomId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateMemberMutation = {
  __typename: "Member";
  id: string;
  orgId: string;
  firstName: string;
  lastName: string;
  email: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user?: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  memberUserId?: string | null;
  organizationMembersId?: string | null;
};

export type UpdateMemberMutation = {
  __typename: "Member";
  id: string;
  orgId: string;
  firstName: string;
  lastName: string;
  email: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user?: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  memberUserId?: string | null;
  organizationMembersId?: string | null;
};

export type DeleteMemberMutation = {
  __typename: "Member";
  id: string;
  orgId: string;
  firstName: string;
  lastName: string;
  email: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user?: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  memberUserId?: string | null;
  organizationMembersId?: string | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  organization?: {
    __typename: "ModelOrganizationTagsConnection";
    items: Array<{
      __typename: "OrganizationTags";
      id: string;
      organizationID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  member?: {
    __typename: "Member";
    id: string;
    orgId: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user?: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    memberUserId?: string | null;
    organizationMembersId?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      createdAt: string;
      updatedAt: string;
      organizationRoomId?: string | null;
      userRoomId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  userMemberId?: string | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  organization?: {
    __typename: "ModelOrganizationTagsConnection";
    items: Array<{
      __typename: "OrganizationTags";
      id: string;
      organizationID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  member?: {
    __typename: "Member";
    id: string;
    orgId: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user?: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    memberUserId?: string | null;
    organizationMembersId?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      createdAt: string;
      updatedAt: string;
      organizationRoomId?: string | null;
      userRoomId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  userMemberId?: string | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  organization?: {
    __typename: "ModelOrganizationTagsConnection";
    items: Array<{
      __typename: "OrganizationTags";
      id: string;
      organizationID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  member?: {
    __typename: "Member";
    id: string;
    orgId: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user?: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    memberUserId?: string | null;
    organizationMembersId?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      createdAt: string;
      updatedAt: string;
      organizationRoomId?: string | null;
      userRoomId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  userMemberId?: string | null;
};

export type CreateRoomMutation = {
  __typename: "Room";
  id: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  };
  members?: Array<{
    __typename: "Member";
    id: string;
    orgId: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user?: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    memberUserId?: string | null;
    organizationMembersId?: string | null;
  } | null> | null;
  chatMessage?: {
    __typename: "ModelChatMessageConnection";
    items: Array<{
      __typename: "ChatMessage";
      id: string;
      createdAt: string;
      updateAt: string;
      content: string;
      updatedAt: string;
      roomChatMessageId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  organizationRoomId?: string | null;
  userRoomId?: string | null;
};

export type UpdateRoomMutation = {
  __typename: "Room";
  id: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  };
  members?: Array<{
    __typename: "Member";
    id: string;
    orgId: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user?: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    memberUserId?: string | null;
    organizationMembersId?: string | null;
  } | null> | null;
  chatMessage?: {
    __typename: "ModelChatMessageConnection";
    items: Array<{
      __typename: "ChatMessage";
      id: string;
      createdAt: string;
      updateAt: string;
      content: string;
      updatedAt: string;
      roomChatMessageId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  organizationRoomId?: string | null;
  userRoomId?: string | null;
};

export type DeleteRoomMutation = {
  __typename: "Room";
  id: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  };
  members?: Array<{
    __typename: "Member";
    id: string;
    orgId: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user?: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    memberUserId?: string | null;
    organizationMembersId?: string | null;
  } | null> | null;
  chatMessage?: {
    __typename: "ModelChatMessageConnection";
    items: Array<{
      __typename: "ChatMessage";
      id: string;
      createdAt: string;
      updateAt: string;
      content: string;
      updatedAt: string;
      roomChatMessageId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  organizationRoomId?: string | null;
  userRoomId?: string | null;
};

export type CreateChatMessageMutation = {
  __typename: "ChatMessage";
  id: string;
  createdAt: string;
  updateAt: string;
  content: string;
  room: {
    __typename: "Room";
    id: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    };
    members?: Array<{
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null> | null;
    chatMessage?: {
      __typename: "ModelChatMessageConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    organizationRoomId?: string | null;
    userRoomId?: string | null;
  };
  updatedAt: string;
  roomChatMessageId?: string | null;
};

export type UpdateChatMessageMutation = {
  __typename: "ChatMessage";
  id: string;
  createdAt: string;
  updateAt: string;
  content: string;
  room: {
    __typename: "Room";
    id: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    };
    members?: Array<{
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null> | null;
    chatMessage?: {
      __typename: "ModelChatMessageConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    organizationRoomId?: string | null;
    userRoomId?: string | null;
  };
  updatedAt: string;
  roomChatMessageId?: string | null;
};

export type DeleteChatMessageMutation = {
  __typename: "ChatMessage";
  id: string;
  createdAt: string;
  updateAt: string;
  content: string;
  room: {
    __typename: "Room";
    id: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    };
    members?: Array<{
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null> | null;
    chatMessage?: {
      __typename: "ModelChatMessageConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    organizationRoomId?: string | null;
    userRoomId?: string | null;
  };
  updatedAt: string;
  roomChatMessageId?: string | null;
};

export type CreateCategoryTagsMutation = {
  __typename: "CategoryTags";
  id: string;
  categoryID: string;
  organizationID: string;
  category: {
    __typename: "Category";
    id: string;
    value: number;
    name: string;
    description?: string | null;
    organization?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateCategoryTagsMutation = {
  __typename: "CategoryTags";
  id: string;
  categoryID: string;
  organizationID: string;
  category: {
    __typename: "Category";
    id: string;
    value: number;
    name: string;
    description?: string | null;
    organization?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteCategoryTagsMutation = {
  __typename: "CategoryTags";
  id: string;
  categoryID: string;
  organizationID: string;
  category: {
    __typename: "Category";
    id: string;
    value: number;
    name: string;
    description?: string | null;
    organization?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateActivityAreaTagsMutation = {
  __typename: "ActivityAreaTags";
  id: string;
  activityAreaID: string;
  organizationID: string;
  activityArea: {
    __typename: "ActivityArea";
    id: string;
    value: number;
    name: string;
    organization?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateActivityAreaTagsMutation = {
  __typename: "ActivityAreaTags";
  id: string;
  activityAreaID: string;
  organizationID: string;
  activityArea: {
    __typename: "ActivityArea";
    id: string;
    value: number;
    name: string;
    organization?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteActivityAreaTagsMutation = {
  __typename: "ActivityAreaTags";
  id: string;
  activityAreaID: string;
  organizationID: string;
  activityArea: {
    __typename: "ActivityArea";
    id: string;
    value: number;
    name: string;
    organization?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateOrganizationTagsMutation = {
  __typename: "OrganizationTags";
  id: string;
  organizationID: string;
  userID: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateOrganizationTagsMutation = {
  __typename: "OrganizationTags";
  id: string;
  organizationID: string;
  userID: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteOrganizationTagsMutation = {
  __typename: "OrganizationTags";
  id: string;
  organizationID: string;
  userID: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type GetCategoryQuery = {
  __typename: "Category";
  id: string;
  value: number;
  name: string;
  description?: string | null;
  organization?: {
    __typename: "ModelCategoryTagsConnection";
    items: Array<{
      __typename: "CategoryTags";
      id: string;
      categoryID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCategoriesQuery = {
  __typename: "ModelCategoryConnection";
  items: Array<{
    __typename: "Category";
    id: string;
    value: number;
    name: string;
    description?: string | null;
    organization?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetActivityAreaQuery = {
  __typename: "ActivityArea";
  id: string;
  value: number;
  name: string;
  organization?: {
    __typename: "ModelActivityAreaTagsConnection";
    items: Array<{
      __typename: "ActivityAreaTags";
      id: string;
      activityAreaID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListActivityAreasQuery = {
  __typename: "ModelActivityAreaConnection";
  items: Array<{
    __typename: "ActivityArea";
    id: string;
    value: number;
    name: string;
    organization?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetOrganizationQuery = {
  __typename: "Organization";
  id: string;
  CompetentAuthority: string;
  name: string;
  address: string;
  representativeName: string;
  establishmentDate: string;
  purpose: string;
  activityAreas?: {
    __typename: "ModelActivityAreaTagsConnection";
    items: Array<{
      __typename: "ActivityAreaTags";
      id: string;
      activityAreaID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  corporateNumber: number;
  registeredDate: string;
  website?: string | null;
  categories?: {
    __typename: "ModelCategoryTagsConnection";
    items: Array<{
      __typename: "CategoryTags";
      id: string;
      categoryID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelOrganizationTagsConnection";
    items: Array<{
      __typename: "OrganizationTags";
      id: string;
      organizationID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  members?: {
    __typename: "ModelMemberConnection";
    items: Array<{
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      createdAt: string;
      updatedAt: string;
      organizationRoomId?: string | null;
      userRoomId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListOrganizationsQuery = {
  __typename: "ModelOrganizationConnection";
  items: Array<{
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetMemberQuery = {
  __typename: "Member";
  id: string;
  orgId: string;
  firstName: string;
  lastName: string;
  email: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user?: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  memberUserId?: string | null;
  organizationMembersId?: string | null;
};

export type ListMembersQuery = {
  __typename: "ModelMemberConnection";
  items: Array<{
    __typename: "Member";
    id: string;
    orgId: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user?: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    memberUserId?: string | null;
    organizationMembersId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  organization?: {
    __typename: "ModelOrganizationTagsConnection";
    items: Array<{
      __typename: "OrganizationTags";
      id: string;
      organizationID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  member?: {
    __typename: "Member";
    id: string;
    orgId: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user?: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    memberUserId?: string | null;
    organizationMembersId?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      createdAt: string;
      updatedAt: string;
      organizationRoomId?: string | null;
      userRoomId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  userMemberId?: string | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetRoomQuery = {
  __typename: "Room";
  id: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  };
  members?: Array<{
    __typename: "Member";
    id: string;
    orgId: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user?: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    memberUserId?: string | null;
    organizationMembersId?: string | null;
  } | null> | null;
  chatMessage?: {
    __typename: "ModelChatMessageConnection";
    items: Array<{
      __typename: "ChatMessage";
      id: string;
      createdAt: string;
      updateAt: string;
      content: string;
      updatedAt: string;
      roomChatMessageId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  organizationRoomId?: string | null;
  userRoomId?: string | null;
};

export type ListRoomsQuery = {
  __typename: "ModelRoomConnection";
  items: Array<{
    __typename: "Room";
    id: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    };
    members?: Array<{
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null> | null;
    chatMessage?: {
      __typename: "ModelChatMessageConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    organizationRoomId?: string | null;
    userRoomId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetChatMessageQuery = {
  __typename: "ChatMessage";
  id: string;
  createdAt: string;
  updateAt: string;
  content: string;
  room: {
    __typename: "Room";
    id: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    };
    members?: Array<{
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null> | null;
    chatMessage?: {
      __typename: "ModelChatMessageConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    organizationRoomId?: string | null;
    userRoomId?: string | null;
  };
  updatedAt: string;
  roomChatMessageId?: string | null;
};

export type ListChatMessagesQuery = {
  __typename: "ModelChatMessageConnection";
  items: Array<{
    __typename: "ChatMessage";
    id: string;
    createdAt: string;
    updateAt: string;
    content: string;
    room: {
      __typename: "Room";
      id: string;
      createdAt: string;
      updatedAt: string;
      organizationRoomId?: string | null;
      userRoomId?: string | null;
    };
    updatedAt: string;
    roomChatMessageId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetCategoryTagsQuery = {
  __typename: "CategoryTags";
  id: string;
  categoryID: string;
  organizationID: string;
  category: {
    __typename: "Category";
    id: string;
    value: number;
    name: string;
    description?: string | null;
    organization?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListCategoryTagsQuery = {
  __typename: "ModelCategoryTagsConnection";
  items: Array<{
    __typename: "CategoryTags";
    id: string;
    categoryID: string;
    organizationID: string;
    category: {
      __typename: "Category";
      id: string;
      value: number;
      name: string;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetActivityAreaTagsQuery = {
  __typename: "ActivityAreaTags";
  id: string;
  activityAreaID: string;
  organizationID: string;
  activityArea: {
    __typename: "ActivityArea";
    id: string;
    value: number;
    name: string;
    organization?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListActivityAreaTagsQuery = {
  __typename: "ModelActivityAreaTagsConnection";
  items: Array<{
    __typename: "ActivityAreaTags";
    id: string;
    activityAreaID: string;
    organizationID: string;
    activityArea: {
      __typename: "ActivityArea";
      id: string;
      value: number;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetOrganizationTagsQuery = {
  __typename: "OrganizationTags";
  id: string;
  organizationID: string;
  userID: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListOrganizationTagsQuery = {
  __typename: "ModelOrganizationTagsConnection";
  items: Array<{
    __typename: "OrganizationTags";
    id: string;
    organizationID: string;
    userID: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateCategorySubscription = {
  __typename: "Category";
  id: string;
  value: number;
  name: string;
  description?: string | null;
  organization?: {
    __typename: "ModelCategoryTagsConnection";
    items: Array<{
      __typename: "CategoryTags";
      id: string;
      categoryID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCategorySubscription = {
  __typename: "Category";
  id: string;
  value: number;
  name: string;
  description?: string | null;
  organization?: {
    __typename: "ModelCategoryTagsConnection";
    items: Array<{
      __typename: "CategoryTags";
      id: string;
      categoryID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCategorySubscription = {
  __typename: "Category";
  id: string;
  value: number;
  name: string;
  description?: string | null;
  organization?: {
    __typename: "ModelCategoryTagsConnection";
    items: Array<{
      __typename: "CategoryTags";
      id: string;
      categoryID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateActivityAreaSubscription = {
  __typename: "ActivityArea";
  id: string;
  value: number;
  name: string;
  organization?: {
    __typename: "ModelActivityAreaTagsConnection";
    items: Array<{
      __typename: "ActivityAreaTags";
      id: string;
      activityAreaID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateActivityAreaSubscription = {
  __typename: "ActivityArea";
  id: string;
  value: number;
  name: string;
  organization?: {
    __typename: "ModelActivityAreaTagsConnection";
    items: Array<{
      __typename: "ActivityAreaTags";
      id: string;
      activityAreaID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteActivityAreaSubscription = {
  __typename: "ActivityArea";
  id: string;
  value: number;
  name: string;
  organization?: {
    __typename: "ModelActivityAreaTagsConnection";
    items: Array<{
      __typename: "ActivityAreaTags";
      id: string;
      activityAreaID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateOrganizationSubscription = {
  __typename: "Organization";
  id: string;
  CompetentAuthority: string;
  name: string;
  address: string;
  representativeName: string;
  establishmentDate: string;
  purpose: string;
  activityAreas?: {
    __typename: "ModelActivityAreaTagsConnection";
    items: Array<{
      __typename: "ActivityAreaTags";
      id: string;
      activityAreaID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  corporateNumber: number;
  registeredDate: string;
  website?: string | null;
  categories?: {
    __typename: "ModelCategoryTagsConnection";
    items: Array<{
      __typename: "CategoryTags";
      id: string;
      categoryID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelOrganizationTagsConnection";
    items: Array<{
      __typename: "OrganizationTags";
      id: string;
      organizationID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  members?: {
    __typename: "ModelMemberConnection";
    items: Array<{
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      createdAt: string;
      updatedAt: string;
      organizationRoomId?: string | null;
      userRoomId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateOrganizationSubscription = {
  __typename: "Organization";
  id: string;
  CompetentAuthority: string;
  name: string;
  address: string;
  representativeName: string;
  establishmentDate: string;
  purpose: string;
  activityAreas?: {
    __typename: "ModelActivityAreaTagsConnection";
    items: Array<{
      __typename: "ActivityAreaTags";
      id: string;
      activityAreaID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  corporateNumber: number;
  registeredDate: string;
  website?: string | null;
  categories?: {
    __typename: "ModelCategoryTagsConnection";
    items: Array<{
      __typename: "CategoryTags";
      id: string;
      categoryID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelOrganizationTagsConnection";
    items: Array<{
      __typename: "OrganizationTags";
      id: string;
      organizationID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  members?: {
    __typename: "ModelMemberConnection";
    items: Array<{
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      createdAt: string;
      updatedAt: string;
      organizationRoomId?: string | null;
      userRoomId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteOrganizationSubscription = {
  __typename: "Organization";
  id: string;
  CompetentAuthority: string;
  name: string;
  address: string;
  representativeName: string;
  establishmentDate: string;
  purpose: string;
  activityAreas?: {
    __typename: "ModelActivityAreaTagsConnection";
    items: Array<{
      __typename: "ActivityAreaTags";
      id: string;
      activityAreaID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  corporateNumber: number;
  registeredDate: string;
  website?: string | null;
  categories?: {
    __typename: "ModelCategoryTagsConnection";
    items: Array<{
      __typename: "CategoryTags";
      id: string;
      categoryID: string;
      organizationID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelOrganizationTagsConnection";
    items: Array<{
      __typename: "OrganizationTags";
      id: string;
      organizationID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  members?: {
    __typename: "ModelMemberConnection";
    items: Array<{
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      createdAt: string;
      updatedAt: string;
      organizationRoomId?: string | null;
      userRoomId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateMemberSubscription = {
  __typename: "Member";
  id: string;
  orgId: string;
  firstName: string;
  lastName: string;
  email: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user?: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  memberUserId?: string | null;
  organizationMembersId?: string | null;
};

export type OnUpdateMemberSubscription = {
  __typename: "Member";
  id: string;
  orgId: string;
  firstName: string;
  lastName: string;
  email: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user?: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  memberUserId?: string | null;
  organizationMembersId?: string | null;
};

export type OnDeleteMemberSubscription = {
  __typename: "Member";
  id: string;
  orgId: string;
  firstName: string;
  lastName: string;
  email: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user?: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  memberUserId?: string | null;
  organizationMembersId?: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  organization?: {
    __typename: "ModelOrganizationTagsConnection";
    items: Array<{
      __typename: "OrganizationTags";
      id: string;
      organizationID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  member?: {
    __typename: "Member";
    id: string;
    orgId: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user?: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    memberUserId?: string | null;
    organizationMembersId?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      createdAt: string;
      updatedAt: string;
      organizationRoomId?: string | null;
      userRoomId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  userMemberId?: string | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  organization?: {
    __typename: "ModelOrganizationTagsConnection";
    items: Array<{
      __typename: "OrganizationTags";
      id: string;
      organizationID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  member?: {
    __typename: "Member";
    id: string;
    orgId: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user?: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    memberUserId?: string | null;
    organizationMembersId?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      createdAt: string;
      updatedAt: string;
      organizationRoomId?: string | null;
      userRoomId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  userMemberId?: string | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  organization?: {
    __typename: "ModelOrganizationTagsConnection";
    items: Array<{
      __typename: "OrganizationTags";
      id: string;
      organizationID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  member?: {
    __typename: "Member";
    id: string;
    orgId: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user?: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    memberUserId?: string | null;
    organizationMembersId?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      createdAt: string;
      updatedAt: string;
      organizationRoomId?: string | null;
      userRoomId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  userMemberId?: string | null;
};

export type OnCreateRoomSubscription = {
  __typename: "Room";
  id: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  };
  members?: Array<{
    __typename: "Member";
    id: string;
    orgId: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user?: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    memberUserId?: string | null;
    organizationMembersId?: string | null;
  } | null> | null;
  chatMessage?: {
    __typename: "ModelChatMessageConnection";
    items: Array<{
      __typename: "ChatMessage";
      id: string;
      createdAt: string;
      updateAt: string;
      content: string;
      updatedAt: string;
      roomChatMessageId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  organizationRoomId?: string | null;
  userRoomId?: string | null;
};

export type OnUpdateRoomSubscription = {
  __typename: "Room";
  id: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  };
  members?: Array<{
    __typename: "Member";
    id: string;
    orgId: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user?: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    memberUserId?: string | null;
    organizationMembersId?: string | null;
  } | null> | null;
  chatMessage?: {
    __typename: "ModelChatMessageConnection";
    items: Array<{
      __typename: "ChatMessage";
      id: string;
      createdAt: string;
      updateAt: string;
      content: string;
      updatedAt: string;
      roomChatMessageId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  organizationRoomId?: string | null;
  userRoomId?: string | null;
};

export type OnDeleteRoomSubscription = {
  __typename: "Room";
  id: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  };
  members?: Array<{
    __typename: "Member";
    id: string;
    orgId: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user?: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    memberUserId?: string | null;
    organizationMembersId?: string | null;
  } | null> | null;
  chatMessage?: {
    __typename: "ModelChatMessageConnection";
    items: Array<{
      __typename: "ChatMessage";
      id: string;
      createdAt: string;
      updateAt: string;
      content: string;
      updatedAt: string;
      roomChatMessageId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  organizationRoomId?: string | null;
  userRoomId?: string | null;
};

export type OnCreateChatMessageSubscription = {
  __typename: "ChatMessage";
  id: string;
  createdAt: string;
  updateAt: string;
  content: string;
  room: {
    __typename: "Room";
    id: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    };
    members?: Array<{
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null> | null;
    chatMessage?: {
      __typename: "ModelChatMessageConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    organizationRoomId?: string | null;
    userRoomId?: string | null;
  };
  updatedAt: string;
  roomChatMessageId?: string | null;
};

export type OnUpdateChatMessageSubscription = {
  __typename: "ChatMessage";
  id: string;
  createdAt: string;
  updateAt: string;
  content: string;
  room: {
    __typename: "Room";
    id: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    };
    members?: Array<{
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null> | null;
    chatMessage?: {
      __typename: "ModelChatMessageConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    organizationRoomId?: string | null;
    userRoomId?: string | null;
  };
  updatedAt: string;
  roomChatMessageId?: string | null;
};

export type OnDeleteChatMessageSubscription = {
  __typename: "ChatMessage";
  id: string;
  createdAt: string;
  updateAt: string;
  content: string;
  room: {
    __typename: "Room";
    id: string;
    organization: {
      __typename: "Organization";
      id: string;
      CompetentAuthority: string;
      name: string;
      address: string;
      representativeName: string;
      establishmentDate: string;
      purpose: string;
      corporateNumber: number;
      registeredDate: string;
      website?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    user: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      createdAt: string;
      updatedAt: string;
      userMemberId?: string | null;
    };
    members?: Array<{
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null> | null;
    chatMessage?: {
      __typename: "ModelChatMessageConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    organizationRoomId?: string | null;
    userRoomId?: string | null;
  };
  updatedAt: string;
  roomChatMessageId?: string | null;
};

export type OnCreateCategoryTagsSubscription = {
  __typename: "CategoryTags";
  id: string;
  categoryID: string;
  organizationID: string;
  category: {
    __typename: "Category";
    id: string;
    value: number;
    name: string;
    description?: string | null;
    organization?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCategoryTagsSubscription = {
  __typename: "CategoryTags";
  id: string;
  categoryID: string;
  organizationID: string;
  category: {
    __typename: "Category";
    id: string;
    value: number;
    name: string;
    description?: string | null;
    organization?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCategoryTagsSubscription = {
  __typename: "CategoryTags";
  id: string;
  categoryID: string;
  organizationID: string;
  category: {
    __typename: "Category";
    id: string;
    value: number;
    name: string;
    description?: string | null;
    organization?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateActivityAreaTagsSubscription = {
  __typename: "ActivityAreaTags";
  id: string;
  activityAreaID: string;
  organizationID: string;
  activityArea: {
    __typename: "ActivityArea";
    id: string;
    value: number;
    name: string;
    organization?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateActivityAreaTagsSubscription = {
  __typename: "ActivityAreaTags";
  id: string;
  activityAreaID: string;
  organizationID: string;
  activityArea: {
    __typename: "ActivityArea";
    id: string;
    value: number;
    name: string;
    organization?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteActivityAreaTagsSubscription = {
  __typename: "ActivityAreaTags";
  id: string;
  activityAreaID: string;
  organizationID: string;
  activityArea: {
    __typename: "ActivityArea";
    id: string;
    value: number;
    name: string;
    organization?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateOrganizationTagsSubscription = {
  __typename: "OrganizationTags";
  id: string;
  organizationID: string;
  userID: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateOrganizationTagsSubscription = {
  __typename: "OrganizationTags";
  id: string;
  organizationID: string;
  userID: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteOrganizationTagsSubscription = {
  __typename: "OrganizationTags";
  id: string;
  organizationID: string;
  userID: string;
  organization: {
    __typename: "Organization";
    id: string;
    CompetentAuthority: string;
    name: string;
    address: string;
    representativeName: string;
    establishmentDate: string;
    purpose: string;
    activityAreas?: {
      __typename: "ModelActivityAreaTagsConnection";
      nextToken?: string | null;
    } | null;
    corporateNumber: number;
    registeredDate: string;
    website?: string | null;
    categories?: {
      __typename: "ModelCategoryTagsConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    members?: {
      __typename: "ModelMemberConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    organization?: {
      __typename: "ModelOrganizationTagsConnection";
      nextToken?: string | null;
    } | null;
    member?: {
      __typename: "Member";
      id: string;
      orgId: string;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      memberUserId?: string | null;
      organizationMembersId?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    userMemberId?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCategory(
    input: CreateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<CreateCategoryMutation> {
    const statement = `mutation CreateCategory($input: CreateCategoryInput!, $condition: ModelCategoryConditionInput) {
        createCategory(input: $input, condition: $condition) {
          __typename
          id
          value
          name
          description
          organization {
            __typename
            items {
              __typename
              id
              categoryID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCategoryMutation>response.data.createCategory;
  }
  async UpdateCategory(
    input: UpdateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<UpdateCategoryMutation> {
    const statement = `mutation UpdateCategory($input: UpdateCategoryInput!, $condition: ModelCategoryConditionInput) {
        updateCategory(input: $input, condition: $condition) {
          __typename
          id
          value
          name
          description
          organization {
            __typename
            items {
              __typename
              id
              categoryID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCategoryMutation>response.data.updateCategory;
  }
  async DeleteCategory(
    input: DeleteCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<DeleteCategoryMutation> {
    const statement = `mutation DeleteCategory($input: DeleteCategoryInput!, $condition: ModelCategoryConditionInput) {
        deleteCategory(input: $input, condition: $condition) {
          __typename
          id
          value
          name
          description
          organization {
            __typename
            items {
              __typename
              id
              categoryID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCategoryMutation>response.data.deleteCategory;
  }
  async CreateActivityArea(
    input: CreateActivityAreaInput,
    condition?: ModelActivityAreaConditionInput
  ): Promise<CreateActivityAreaMutation> {
    const statement = `mutation CreateActivityArea($input: CreateActivityAreaInput!, $condition: ModelActivityAreaConditionInput) {
        createActivityArea(input: $input, condition: $condition) {
          __typename
          id
          value
          name
          organization {
            __typename
            items {
              __typename
              id
              activityAreaID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateActivityAreaMutation>response.data.createActivityArea;
  }
  async UpdateActivityArea(
    input: UpdateActivityAreaInput,
    condition?: ModelActivityAreaConditionInput
  ): Promise<UpdateActivityAreaMutation> {
    const statement = `mutation UpdateActivityArea($input: UpdateActivityAreaInput!, $condition: ModelActivityAreaConditionInput) {
        updateActivityArea(input: $input, condition: $condition) {
          __typename
          id
          value
          name
          organization {
            __typename
            items {
              __typename
              id
              activityAreaID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateActivityAreaMutation>response.data.updateActivityArea;
  }
  async DeleteActivityArea(
    input: DeleteActivityAreaInput,
    condition?: ModelActivityAreaConditionInput
  ): Promise<DeleteActivityAreaMutation> {
    const statement = `mutation DeleteActivityArea($input: DeleteActivityAreaInput!, $condition: ModelActivityAreaConditionInput) {
        deleteActivityArea(input: $input, condition: $condition) {
          __typename
          id
          value
          name
          organization {
            __typename
            items {
              __typename
              id
              activityAreaID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteActivityAreaMutation>response.data.deleteActivityArea;
  }
  async CreateOrganization(
    input: CreateOrganizationInput,
    condition?: ModelOrganizationConditionInput
  ): Promise<CreateOrganizationMutation> {
    const statement = `mutation CreateOrganization($input: CreateOrganizationInput!, $condition: ModelOrganizationConditionInput) {
        createOrganization(input: $input, condition: $condition) {
          __typename
          id
          CompetentAuthority
          name
          address
          representativeName
          establishmentDate
          purpose
          activityAreas {
            __typename
            items {
              __typename
              id
              activityAreaID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          corporateNumber
          registeredDate
          website
          categories {
            __typename
            items {
              __typename
              id
              categoryID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              organizationID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          members {
            __typename
            items {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            nextToken
          }
          room {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
              organizationRoomId
              userRoomId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOrganizationMutation>response.data.createOrganization;
  }
  async UpdateOrganization(
    input: UpdateOrganizationInput,
    condition?: ModelOrganizationConditionInput
  ): Promise<UpdateOrganizationMutation> {
    const statement = `mutation UpdateOrganization($input: UpdateOrganizationInput!, $condition: ModelOrganizationConditionInput) {
        updateOrganization(input: $input, condition: $condition) {
          __typename
          id
          CompetentAuthority
          name
          address
          representativeName
          establishmentDate
          purpose
          activityAreas {
            __typename
            items {
              __typename
              id
              activityAreaID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          corporateNumber
          registeredDate
          website
          categories {
            __typename
            items {
              __typename
              id
              categoryID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              organizationID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          members {
            __typename
            items {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            nextToken
          }
          room {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
              organizationRoomId
              userRoomId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateOrganizationMutation>response.data.updateOrganization;
  }
  async DeleteOrganization(
    input: DeleteOrganizationInput,
    condition?: ModelOrganizationConditionInput
  ): Promise<DeleteOrganizationMutation> {
    const statement = `mutation DeleteOrganization($input: DeleteOrganizationInput!, $condition: ModelOrganizationConditionInput) {
        deleteOrganization(input: $input, condition: $condition) {
          __typename
          id
          CompetentAuthority
          name
          address
          representativeName
          establishmentDate
          purpose
          activityAreas {
            __typename
            items {
              __typename
              id
              activityAreaID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          corporateNumber
          registeredDate
          website
          categories {
            __typename
            items {
              __typename
              id
              categoryID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              organizationID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          members {
            __typename
            items {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            nextToken
          }
          room {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
              organizationRoomId
              userRoomId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOrganizationMutation>response.data.deleteOrganization;
  }
  async CreateMember(
    input: CreateMemberInput,
    condition?: ModelMemberConditionInput
  ): Promise<CreateMemberMutation> {
    const statement = `mutation CreateMember($input: CreateMemberInput!, $condition: ModelMemberConditionInput) {
        createMember(input: $input, condition: $condition) {
          __typename
          id
          orgId
          firstName
          lastName
          email
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          createdAt
          updatedAt
          memberUserId
          organizationMembersId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMemberMutation>response.data.createMember;
  }
  async UpdateMember(
    input: UpdateMemberInput,
    condition?: ModelMemberConditionInput
  ): Promise<UpdateMemberMutation> {
    const statement = `mutation UpdateMember($input: UpdateMemberInput!, $condition: ModelMemberConditionInput) {
        updateMember(input: $input, condition: $condition) {
          __typename
          id
          orgId
          firstName
          lastName
          email
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          createdAt
          updatedAt
          memberUserId
          organizationMembersId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMemberMutation>response.data.updateMember;
  }
  async DeleteMember(
    input: DeleteMemberInput,
    condition?: ModelMemberConditionInput
  ): Promise<DeleteMemberMutation> {
    const statement = `mutation DeleteMember($input: DeleteMemberInput!, $condition: ModelMemberConditionInput) {
        deleteMember(input: $input, condition: $condition) {
          __typename
          id
          orgId
          firstName
          lastName
          email
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          createdAt
          updatedAt
          memberUserId
          organizationMembersId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMemberMutation>response.data.deleteMember;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          email
          phoneNumber
          organization {
            __typename
            items {
              __typename
              id
              organizationID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          member {
            __typename
            id
            orgId
            firstName
            lastName
            email
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            createdAt
            updatedAt
            memberUserId
            organizationMembersId
          }
          room {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
              organizationRoomId
              userRoomId
            }
            nextToken
          }
          createdAt
          updatedAt
          userMemberId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          email
          phoneNumber
          organization {
            __typename
            items {
              __typename
              id
              organizationID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          member {
            __typename
            id
            orgId
            firstName
            lastName
            email
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            createdAt
            updatedAt
            memberUserId
            organizationMembersId
          }
          room {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
              organizationRoomId
              userRoomId
            }
            nextToken
          }
          createdAt
          updatedAt
          userMemberId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          email
          phoneNumber
          organization {
            __typename
            items {
              __typename
              id
              organizationID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          member {
            __typename
            id
            orgId
            firstName
            lastName
            email
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            createdAt
            updatedAt
            memberUserId
            organizationMembersId
          }
          room {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
              organizationRoomId
              userRoomId
            }
            nextToken
          }
          createdAt
          updatedAt
          userMemberId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateRoom(
    input: CreateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<CreateRoomMutation> {
    const statement = `mutation CreateRoom($input: CreateRoomInput!, $condition: ModelRoomConditionInput) {
        createRoom(input: $input, condition: $condition) {
          __typename
          id
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          members {
            __typename
            id
            orgId
            firstName
            lastName
            email
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            createdAt
            updatedAt
            memberUserId
            organizationMembersId
          }
          chatMessage {
            __typename
            items {
              __typename
              id
              createdAt
              updateAt
              content
              updatedAt
              roomChatMessageId
            }
            nextToken
          }
          createdAt
          updatedAt
          organizationRoomId
          userRoomId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomMutation>response.data.createRoom;
  }
  async UpdateRoom(
    input: UpdateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<UpdateRoomMutation> {
    const statement = `mutation UpdateRoom($input: UpdateRoomInput!, $condition: ModelRoomConditionInput) {
        updateRoom(input: $input, condition: $condition) {
          __typename
          id
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          members {
            __typename
            id
            orgId
            firstName
            lastName
            email
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            createdAt
            updatedAt
            memberUserId
            organizationMembersId
          }
          chatMessage {
            __typename
            items {
              __typename
              id
              createdAt
              updateAt
              content
              updatedAt
              roomChatMessageId
            }
            nextToken
          }
          createdAt
          updatedAt
          organizationRoomId
          userRoomId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomMutation>response.data.updateRoom;
  }
  async DeleteRoom(
    input: DeleteRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<DeleteRoomMutation> {
    const statement = `mutation DeleteRoom($input: DeleteRoomInput!, $condition: ModelRoomConditionInput) {
        deleteRoom(input: $input, condition: $condition) {
          __typename
          id
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          members {
            __typename
            id
            orgId
            firstName
            lastName
            email
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            createdAt
            updatedAt
            memberUserId
            organizationMembersId
          }
          chatMessage {
            __typename
            items {
              __typename
              id
              createdAt
              updateAt
              content
              updatedAt
              roomChatMessageId
            }
            nextToken
          }
          createdAt
          updatedAt
          organizationRoomId
          userRoomId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomMutation>response.data.deleteRoom;
  }
  async CreateChatMessage(
    input: CreateChatMessageInput,
    condition?: ModelChatMessageConditionInput
  ): Promise<CreateChatMessageMutation> {
    const statement = `mutation CreateChatMessage($input: CreateChatMessageInput!, $condition: ModelChatMessageConditionInput) {
        createChatMessage(input: $input, condition: $condition) {
          __typename
          id
          createdAt
          updateAt
          content
          room {
            __typename
            id
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            members {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            chatMessage {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            organizationRoomId
            userRoomId
          }
          updatedAt
          roomChatMessageId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateChatMessageMutation>response.data.createChatMessage;
  }
  async UpdateChatMessage(
    input: UpdateChatMessageInput,
    condition?: ModelChatMessageConditionInput
  ): Promise<UpdateChatMessageMutation> {
    const statement = `mutation UpdateChatMessage($input: UpdateChatMessageInput!, $condition: ModelChatMessageConditionInput) {
        updateChatMessage(input: $input, condition: $condition) {
          __typename
          id
          createdAt
          updateAt
          content
          room {
            __typename
            id
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            members {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            chatMessage {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            organizationRoomId
            userRoomId
          }
          updatedAt
          roomChatMessageId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateChatMessageMutation>response.data.updateChatMessage;
  }
  async DeleteChatMessage(
    input: DeleteChatMessageInput,
    condition?: ModelChatMessageConditionInput
  ): Promise<DeleteChatMessageMutation> {
    const statement = `mutation DeleteChatMessage($input: DeleteChatMessageInput!, $condition: ModelChatMessageConditionInput) {
        deleteChatMessage(input: $input, condition: $condition) {
          __typename
          id
          createdAt
          updateAt
          content
          room {
            __typename
            id
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            members {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            chatMessage {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            organizationRoomId
            userRoomId
          }
          updatedAt
          roomChatMessageId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteChatMessageMutation>response.data.deleteChatMessage;
  }
  async CreateCategoryTags(
    input: CreateCategoryTagsInput,
    condition?: ModelCategoryTagsConditionInput
  ): Promise<CreateCategoryTagsMutation> {
    const statement = `mutation CreateCategoryTags($input: CreateCategoryTagsInput!, $condition: ModelCategoryTagsConditionInput) {
        createCategoryTags(input: $input, condition: $condition) {
          __typename
          id
          categoryID
          organizationID
          category {
            __typename
            id
            value
            name
            description
            organization {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCategoryTagsMutation>response.data.createCategoryTags;
  }
  async UpdateCategoryTags(
    input: UpdateCategoryTagsInput,
    condition?: ModelCategoryTagsConditionInput
  ): Promise<UpdateCategoryTagsMutation> {
    const statement = `mutation UpdateCategoryTags($input: UpdateCategoryTagsInput!, $condition: ModelCategoryTagsConditionInput) {
        updateCategoryTags(input: $input, condition: $condition) {
          __typename
          id
          categoryID
          organizationID
          category {
            __typename
            id
            value
            name
            description
            organization {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCategoryTagsMutation>response.data.updateCategoryTags;
  }
  async DeleteCategoryTags(
    input: DeleteCategoryTagsInput,
    condition?: ModelCategoryTagsConditionInput
  ): Promise<DeleteCategoryTagsMutation> {
    const statement = `mutation DeleteCategoryTags($input: DeleteCategoryTagsInput!, $condition: ModelCategoryTagsConditionInput) {
        deleteCategoryTags(input: $input, condition: $condition) {
          __typename
          id
          categoryID
          organizationID
          category {
            __typename
            id
            value
            name
            description
            organization {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCategoryTagsMutation>response.data.deleteCategoryTags;
  }
  async CreateActivityAreaTags(
    input: CreateActivityAreaTagsInput,
    condition?: ModelActivityAreaTagsConditionInput
  ): Promise<CreateActivityAreaTagsMutation> {
    const statement = `mutation CreateActivityAreaTags($input: CreateActivityAreaTagsInput!, $condition: ModelActivityAreaTagsConditionInput) {
        createActivityAreaTags(input: $input, condition: $condition) {
          __typename
          id
          activityAreaID
          organizationID
          activityArea {
            __typename
            id
            value
            name
            organization {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateActivityAreaTagsMutation>response.data.createActivityAreaTags;
  }
  async UpdateActivityAreaTags(
    input: UpdateActivityAreaTagsInput,
    condition?: ModelActivityAreaTagsConditionInput
  ): Promise<UpdateActivityAreaTagsMutation> {
    const statement = `mutation UpdateActivityAreaTags($input: UpdateActivityAreaTagsInput!, $condition: ModelActivityAreaTagsConditionInput) {
        updateActivityAreaTags(input: $input, condition: $condition) {
          __typename
          id
          activityAreaID
          organizationID
          activityArea {
            __typename
            id
            value
            name
            organization {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateActivityAreaTagsMutation>response.data.updateActivityAreaTags;
  }
  async DeleteActivityAreaTags(
    input: DeleteActivityAreaTagsInput,
    condition?: ModelActivityAreaTagsConditionInput
  ): Promise<DeleteActivityAreaTagsMutation> {
    const statement = `mutation DeleteActivityAreaTags($input: DeleteActivityAreaTagsInput!, $condition: ModelActivityAreaTagsConditionInput) {
        deleteActivityAreaTags(input: $input, condition: $condition) {
          __typename
          id
          activityAreaID
          organizationID
          activityArea {
            __typename
            id
            value
            name
            organization {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteActivityAreaTagsMutation>response.data.deleteActivityAreaTags;
  }
  async CreateOrganizationTags(
    input: CreateOrganizationTagsInput,
    condition?: ModelOrganizationTagsConditionInput
  ): Promise<CreateOrganizationTagsMutation> {
    const statement = `mutation CreateOrganizationTags($input: CreateOrganizationTagsInput!, $condition: ModelOrganizationTagsConditionInput) {
        createOrganizationTags(input: $input, condition: $condition) {
          __typename
          id
          organizationID
          userID
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOrganizationTagsMutation>response.data.createOrganizationTags;
  }
  async UpdateOrganizationTags(
    input: UpdateOrganizationTagsInput,
    condition?: ModelOrganizationTagsConditionInput
  ): Promise<UpdateOrganizationTagsMutation> {
    const statement = `mutation UpdateOrganizationTags($input: UpdateOrganizationTagsInput!, $condition: ModelOrganizationTagsConditionInput) {
        updateOrganizationTags(input: $input, condition: $condition) {
          __typename
          id
          organizationID
          userID
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateOrganizationTagsMutation>response.data.updateOrganizationTags;
  }
  async DeleteOrganizationTags(
    input: DeleteOrganizationTagsInput,
    condition?: ModelOrganizationTagsConditionInput
  ): Promise<DeleteOrganizationTagsMutation> {
    const statement = `mutation DeleteOrganizationTags($input: DeleteOrganizationTagsInput!, $condition: ModelOrganizationTagsConditionInput) {
        deleteOrganizationTags(input: $input, condition: $condition) {
          __typename
          id
          organizationID
          userID
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOrganizationTagsMutation>response.data.deleteOrganizationTags;
  }
  async GetCategory(id: string): Promise<GetCategoryQuery> {
    const statement = `query GetCategory($id: ID!) {
        getCategory(id: $id) {
          __typename
          id
          value
          name
          description
          organization {
            __typename
            items {
              __typename
              id
              categoryID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCategoryQuery>response.data.getCategory;
  }
  async ListCategories(
    filter?: ModelCategoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCategoriesQuery> {
    const statement = `query ListCategories($filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String) {
        listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            value
            name
            description
            organization {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCategoriesQuery>response.data.listCategories;
  }
  async GetActivityArea(id: string): Promise<GetActivityAreaQuery> {
    const statement = `query GetActivityArea($id: ID!) {
        getActivityArea(id: $id) {
          __typename
          id
          value
          name
          organization {
            __typename
            items {
              __typename
              id
              activityAreaID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetActivityAreaQuery>response.data.getActivityArea;
  }
  async ListActivityAreas(
    filter?: ModelActivityAreaFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListActivityAreasQuery> {
    const statement = `query ListActivityAreas($filter: ModelActivityAreaFilterInput, $limit: Int, $nextToken: String) {
        listActivityAreas(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            value
            name
            organization {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListActivityAreasQuery>response.data.listActivityAreas;
  }
  async GetOrganization(id: string): Promise<GetOrganizationQuery> {
    const statement = `query GetOrganization($id: ID!) {
        getOrganization(id: $id) {
          __typename
          id
          CompetentAuthority
          name
          address
          representativeName
          establishmentDate
          purpose
          activityAreas {
            __typename
            items {
              __typename
              id
              activityAreaID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          corporateNumber
          registeredDate
          website
          categories {
            __typename
            items {
              __typename
              id
              categoryID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              organizationID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          members {
            __typename
            items {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            nextToken
          }
          room {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
              organizationRoomId
              userRoomId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOrganizationQuery>response.data.getOrganization;
  }
  async ListOrganizations(
    filter?: ModelOrganizationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOrganizationsQuery> {
    const statement = `query ListOrganizations($filter: ModelOrganizationFilterInput, $limit: Int, $nextToken: String) {
        listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOrganizationsQuery>response.data.listOrganizations;
  }
  async GetMember(id: string): Promise<GetMemberQuery> {
    const statement = `query GetMember($id: ID!) {
        getMember(id: $id) {
          __typename
          id
          orgId
          firstName
          lastName
          email
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          createdAt
          updatedAt
          memberUserId
          organizationMembersId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMemberQuery>response.data.getMember;
  }
  async ListMembers(
    filter?: ModelMemberFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMembersQuery> {
    const statement = `query ListMembers($filter: ModelMemberFilterInput, $limit: Int, $nextToken: String) {
        listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            orgId
            firstName
            lastName
            email
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            createdAt
            updatedAt
            memberUserId
            organizationMembersId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMembersQuery>response.data.listMembers;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          firstName
          lastName
          email
          phoneNumber
          organization {
            __typename
            items {
              __typename
              id
              organizationID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          member {
            __typename
            id
            orgId
            firstName
            lastName
            email
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            createdAt
            updatedAt
            memberUserId
            organizationMembersId
          }
          room {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
              organizationRoomId
              userRoomId
            }
            nextToken
          }
          createdAt
          updatedAt
          userMemberId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetRoom(id: string): Promise<GetRoomQuery> {
    const statement = `query GetRoom($id: ID!) {
        getRoom(id: $id) {
          __typename
          id
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          members {
            __typename
            id
            orgId
            firstName
            lastName
            email
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            createdAt
            updatedAt
            memberUserId
            organizationMembersId
          }
          chatMessage {
            __typename
            items {
              __typename
              id
              createdAt
              updateAt
              content
              updatedAt
              roomChatMessageId
            }
            nextToken
          }
          createdAt
          updatedAt
          organizationRoomId
          userRoomId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoomQuery>response.data.getRoom;
  }
  async ListRooms(
    filter?: ModelRoomFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRoomsQuery> {
    const statement = `query ListRooms($filter: ModelRoomFilterInput, $limit: Int, $nextToken: String) {
        listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            members {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            chatMessage {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            organizationRoomId
            userRoomId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomsQuery>response.data.listRooms;
  }
  async GetChatMessage(id: string): Promise<GetChatMessageQuery> {
    const statement = `query GetChatMessage($id: ID!) {
        getChatMessage(id: $id) {
          __typename
          id
          createdAt
          updateAt
          content
          room {
            __typename
            id
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            members {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            chatMessage {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            organizationRoomId
            userRoomId
          }
          updatedAt
          roomChatMessageId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetChatMessageQuery>response.data.getChatMessage;
  }
  async ListChatMessages(
    filter?: ModelChatMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListChatMessagesQuery> {
    const statement = `query ListChatMessages($filter: ModelChatMessageFilterInput, $limit: Int, $nextToken: String) {
        listChatMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            createdAt
            updateAt
            content
            room {
              __typename
              id
              createdAt
              updatedAt
              organizationRoomId
              userRoomId
            }
            updatedAt
            roomChatMessageId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListChatMessagesQuery>response.data.listChatMessages;
  }
  async GetCategoryTags(id: string): Promise<GetCategoryTagsQuery> {
    const statement = `query GetCategoryTags($id: ID!) {
        getCategoryTags(id: $id) {
          __typename
          id
          categoryID
          organizationID
          category {
            __typename
            id
            value
            name
            description
            organization {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCategoryTagsQuery>response.data.getCategoryTags;
  }
  async ListCategoryTags(
    filter?: ModelCategoryTagsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCategoryTagsQuery> {
    const statement = `query ListCategoryTags($filter: ModelCategoryTagsFilterInput, $limit: Int, $nextToken: String) {
        listCategoryTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            categoryID
            organizationID
            category {
              __typename
              id
              value
              name
              description
              createdAt
              updatedAt
            }
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCategoryTagsQuery>response.data.listCategoryTags;
  }
  async GetActivityAreaTags(id: string): Promise<GetActivityAreaTagsQuery> {
    const statement = `query GetActivityAreaTags($id: ID!) {
        getActivityAreaTags(id: $id) {
          __typename
          id
          activityAreaID
          organizationID
          activityArea {
            __typename
            id
            value
            name
            organization {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetActivityAreaTagsQuery>response.data.getActivityAreaTags;
  }
  async ListActivityAreaTags(
    filter?: ModelActivityAreaTagsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListActivityAreaTagsQuery> {
    const statement = `query ListActivityAreaTags($filter: ModelActivityAreaTagsFilterInput, $limit: Int, $nextToken: String) {
        listActivityAreaTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            activityAreaID
            organizationID
            activityArea {
              __typename
              id
              value
              name
              createdAt
              updatedAt
            }
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListActivityAreaTagsQuery>response.data.listActivityAreaTags;
  }
  async GetOrganizationTags(id: string): Promise<GetOrganizationTagsQuery> {
    const statement = `query GetOrganizationTags($id: ID!) {
        getOrganizationTags(id: $id) {
          __typename
          id
          organizationID
          userID
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOrganizationTagsQuery>response.data.getOrganizationTags;
  }
  async ListOrganizationTags(
    filter?: ModelOrganizationTagsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOrganizationTagsQuery> {
    const statement = `query ListOrganizationTags($filter: ModelOrganizationTagsFilterInput, $limit: Int, $nextToken: String) {
        listOrganizationTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            organizationID
            userID
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOrganizationTagsQuery>response.data.listOrganizationTags;
  }
  OnCreateCategoryListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCategory">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCategory {
        onCreateCategory {
          __typename
          id
          value
          name
          description
          organization {
            __typename
            items {
              __typename
              id
              categoryID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCategory">>
  >;

  OnUpdateCategoryListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCategory">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCategory {
        onUpdateCategory {
          __typename
          id
          value
          name
          description
          organization {
            __typename
            items {
              __typename
              id
              categoryID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCategory">>
  >;

  OnDeleteCategoryListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCategory">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCategory {
        onDeleteCategory {
          __typename
          id
          value
          name
          description
          organization {
            __typename
            items {
              __typename
              id
              categoryID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCategory">>
  >;

  OnCreateActivityAreaListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateActivityArea">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateActivityArea {
        onCreateActivityArea {
          __typename
          id
          value
          name
          organization {
            __typename
            items {
              __typename
              id
              activityAreaID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateActivityArea">>
  >;

  OnUpdateActivityAreaListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateActivityArea">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateActivityArea {
        onUpdateActivityArea {
          __typename
          id
          value
          name
          organization {
            __typename
            items {
              __typename
              id
              activityAreaID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateActivityArea">>
  >;

  OnDeleteActivityAreaListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteActivityArea">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteActivityArea {
        onDeleteActivityArea {
          __typename
          id
          value
          name
          organization {
            __typename
            items {
              __typename
              id
              activityAreaID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteActivityArea">>
  >;

  OnCreateOrganizationListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateOrganization">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrganization {
        onCreateOrganization {
          __typename
          id
          CompetentAuthority
          name
          address
          representativeName
          establishmentDate
          purpose
          activityAreas {
            __typename
            items {
              __typename
              id
              activityAreaID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          corporateNumber
          registeredDate
          website
          categories {
            __typename
            items {
              __typename
              id
              categoryID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              organizationID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          members {
            __typename
            items {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            nextToken
          }
          room {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
              organizationRoomId
              userRoomId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateOrganization">>
  >;

  OnUpdateOrganizationListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateOrganization">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOrganization {
        onUpdateOrganization {
          __typename
          id
          CompetentAuthority
          name
          address
          representativeName
          establishmentDate
          purpose
          activityAreas {
            __typename
            items {
              __typename
              id
              activityAreaID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          corporateNumber
          registeredDate
          website
          categories {
            __typename
            items {
              __typename
              id
              categoryID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              organizationID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          members {
            __typename
            items {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            nextToken
          }
          room {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
              organizationRoomId
              userRoomId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateOrganization">>
  >;

  OnDeleteOrganizationListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteOrganization">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOrganization {
        onDeleteOrganization {
          __typename
          id
          CompetentAuthority
          name
          address
          representativeName
          establishmentDate
          purpose
          activityAreas {
            __typename
            items {
              __typename
              id
              activityAreaID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          corporateNumber
          registeredDate
          website
          categories {
            __typename
            items {
              __typename
              id
              categoryID
              organizationID
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              organizationID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          members {
            __typename
            items {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            nextToken
          }
          room {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
              organizationRoomId
              userRoomId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteOrganization">>
  >;

  OnCreateMemberListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMember">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMember {
        onCreateMember {
          __typename
          id
          orgId
          firstName
          lastName
          email
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          createdAt
          updatedAt
          memberUserId
          organizationMembersId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMember">>
  >;

  OnUpdateMemberListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMember">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMember {
        onUpdateMember {
          __typename
          id
          orgId
          firstName
          lastName
          email
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          createdAt
          updatedAt
          memberUserId
          organizationMembersId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMember">>
  >;

  OnDeleteMemberListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMember">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMember {
        onDeleteMember {
          __typename
          id
          orgId
          firstName
          lastName
          email
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          createdAt
          updatedAt
          memberUserId
          organizationMembersId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMember">>
  >;

  OnCreateUserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          firstName
          lastName
          email
          phoneNumber
          organization {
            __typename
            items {
              __typename
              id
              organizationID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          member {
            __typename
            id
            orgId
            firstName
            lastName
            email
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            createdAt
            updatedAt
            memberUserId
            organizationMembersId
          }
          room {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
              organizationRoomId
              userRoomId
            }
            nextToken
          }
          createdAt
          updatedAt
          userMemberId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  >;

  OnUpdateUserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          firstName
          lastName
          email
          phoneNumber
          organization {
            __typename
            items {
              __typename
              id
              organizationID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          member {
            __typename
            id
            orgId
            firstName
            lastName
            email
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            createdAt
            updatedAt
            memberUserId
            organizationMembersId
          }
          room {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
              organizationRoomId
              userRoomId
            }
            nextToken
          }
          createdAt
          updatedAt
          userMemberId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  >;

  OnDeleteUserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          firstName
          lastName
          email
          phoneNumber
          organization {
            __typename
            items {
              __typename
              id
              organizationID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          member {
            __typename
            id
            orgId
            firstName
            lastName
            email
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            createdAt
            updatedAt
            memberUserId
            organizationMembersId
          }
          room {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
              organizationRoomId
              userRoomId
            }
            nextToken
          }
          createdAt
          updatedAt
          userMemberId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  >;

  OnCreateRoomListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoom">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoom {
        onCreateRoom {
          __typename
          id
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          members {
            __typename
            id
            orgId
            firstName
            lastName
            email
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            createdAt
            updatedAt
            memberUserId
            organizationMembersId
          }
          chatMessage {
            __typename
            items {
              __typename
              id
              createdAt
              updateAt
              content
              updatedAt
              roomChatMessageId
            }
            nextToken
          }
          createdAt
          updatedAt
          organizationRoomId
          userRoomId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoom">>
  >;

  OnUpdateRoomListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoom">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRoom {
        onUpdateRoom {
          __typename
          id
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          members {
            __typename
            id
            orgId
            firstName
            lastName
            email
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            createdAt
            updatedAt
            memberUserId
            organizationMembersId
          }
          chatMessage {
            __typename
            items {
              __typename
              id
              createdAt
              updateAt
              content
              updatedAt
              roomChatMessageId
            }
            nextToken
          }
          createdAt
          updatedAt
          organizationRoomId
          userRoomId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoom">>
  >;

  OnDeleteRoomListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoom">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRoom {
        onDeleteRoom {
          __typename
          id
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          members {
            __typename
            id
            orgId
            firstName
            lastName
            email
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            createdAt
            updatedAt
            memberUserId
            organizationMembersId
          }
          chatMessage {
            __typename
            items {
              __typename
              id
              createdAt
              updateAt
              content
              updatedAt
              roomChatMessageId
            }
            nextToken
          }
          createdAt
          updatedAt
          organizationRoomId
          userRoomId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoom">>
  >;

  OnCreateChatMessageListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateChatMessage">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateChatMessage {
        onCreateChatMessage {
          __typename
          id
          createdAt
          updateAt
          content
          room {
            __typename
            id
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            members {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            chatMessage {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            organizationRoomId
            userRoomId
          }
          updatedAt
          roomChatMessageId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateChatMessage">>
  >;

  OnUpdateChatMessageListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateChatMessage">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateChatMessage {
        onUpdateChatMessage {
          __typename
          id
          createdAt
          updateAt
          content
          room {
            __typename
            id
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            members {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            chatMessage {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            organizationRoomId
            userRoomId
          }
          updatedAt
          roomChatMessageId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateChatMessage">>
  >;

  OnDeleteChatMessageListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteChatMessage">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteChatMessage {
        onDeleteChatMessage {
          __typename
          id
          createdAt
          updateAt
          content
          room {
            __typename
            id
            organization {
              __typename
              id
              CompetentAuthority
              name
              address
              representativeName
              establishmentDate
              purpose
              corporateNumber
              registeredDate
              website
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              firstName
              lastName
              email
              phoneNumber
              createdAt
              updatedAt
              userMemberId
            }
            members {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            chatMessage {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            organizationRoomId
            userRoomId
          }
          updatedAt
          roomChatMessageId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteChatMessage">>
  >;

  OnCreateCategoryTagsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCategoryTags">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCategoryTags {
        onCreateCategoryTags {
          __typename
          id
          categoryID
          organizationID
          category {
            __typename
            id
            value
            name
            description
            organization {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCategoryTags">>
  >;

  OnUpdateCategoryTagsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCategoryTags">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCategoryTags {
        onUpdateCategoryTags {
          __typename
          id
          categoryID
          organizationID
          category {
            __typename
            id
            value
            name
            description
            organization {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCategoryTags">>
  >;

  OnDeleteCategoryTagsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCategoryTags">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCategoryTags {
        onDeleteCategoryTags {
          __typename
          id
          categoryID
          organizationID
          category {
            __typename
            id
            value
            name
            description
            organization {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCategoryTags">>
  >;

  OnCreateActivityAreaTagsListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateActivityAreaTags">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateActivityAreaTags {
        onCreateActivityAreaTags {
          __typename
          id
          activityAreaID
          organizationID
          activityArea {
            __typename
            id
            value
            name
            organization {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateActivityAreaTags">
    >
  >;

  OnUpdateActivityAreaTagsListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateActivityAreaTags">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateActivityAreaTags {
        onUpdateActivityAreaTags {
          __typename
          id
          activityAreaID
          organizationID
          activityArea {
            __typename
            id
            value
            name
            organization {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateActivityAreaTags">
    >
  >;

  OnDeleteActivityAreaTagsListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteActivityAreaTags">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteActivityAreaTags {
        onDeleteActivityAreaTags {
          __typename
          id
          activityAreaID
          organizationID
          activityArea {
            __typename
            id
            value
            name
            organization {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteActivityAreaTags">
    >
  >;

  OnCreateOrganizationTagsListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateOrganizationTags">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrganizationTags {
        onCreateOrganizationTags {
          __typename
          id
          organizationID
          userID
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateOrganizationTags">
    >
  >;

  OnUpdateOrganizationTagsListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateOrganizationTags">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOrganizationTags {
        onUpdateOrganizationTags {
          __typename
          id
          organizationID
          userID
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateOrganizationTags">
    >
  >;

  OnDeleteOrganizationTagsListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteOrganizationTags">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOrganizationTags {
        onDeleteOrganizationTags {
          __typename
          id
          organizationID
          userID
          organization {
            __typename
            id
            CompetentAuthority
            name
            address
            representativeName
            establishmentDate
            purpose
            activityAreas {
              __typename
              nextToken
            }
            corporateNumber
            registeredDate
            website
            categories {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            organization {
              __typename
              nextToken
            }
            member {
              __typename
              id
              orgId
              firstName
              lastName
              email
              createdAt
              updatedAt
              memberUserId
              organizationMembersId
            }
            room {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            userMemberId
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteOrganizationTags">
    >
  >;
}
