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
  createdAt: string;
  updatedAt: string;
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

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  value?: ModelIntInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
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

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection";
  items: Array<Category | null>;
  nextToken?: string | null;
};

export type CreateCategoryMutation = {
  __typename: "Category";
  id: string;
  value: number;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCategoryMutation = {
  __typename: "Category";
  id: string;
  value: number;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCategoryMutation = {
  __typename: "Category";
  id: string;
  value: number;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetCategoryQuery = {
  __typename: "Category";
  id: string;
  value: number;
  name: string;
  description?: string | null;
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
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCategorySubscription = {
  __typename: "Category";
  id: string;
  value: number;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCategorySubscription = {
  __typename: "Category";
  id: string;
  value: number;
  name: string;
  description?: string | null;
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
  async GetCategory(id: string): Promise<GetCategoryQuery> {
    const statement = `query GetCategory($id: ID!) {
        getCategory(id: $id) {
          __typename
          id
          value
          name
          description
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
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCategory">>
  >;
}
