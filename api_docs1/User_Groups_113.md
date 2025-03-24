# User Groups

In Zoho CRM, you can create different types of groups (set of users) to manage a set of common records. Every group can consist of members that are grouped based on the users, roles, roles and subordinates, territories and sub-territories. These combinations allow you to share common records through data sharing rules. For more details, refer to [Users and Groups](https://help.zoho.com/portal/en/kb/crm/users-and-control/group-management/articles/create-groups#Create_Groups).

#### Purpose

To get the details of the user groups created for your organization.

#### Endpoints

[GET /settings/user\_groups](https://www.zoho.com/crm/developer/docs/api/v7/get-user-groups.html)

[GET /settings/user\_groups/{group\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-user-groups.html)

### Request Details

#### Request URL

**Get all user groups** \- {api-domain}/crm/{version}/settings/user\_groups

**Get a specific user group** \- {api-domain}/crm/{version}/settings/user\_groups/{user\_group\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.user\_groups.READ

#### Parameters

- includeoptional



This parameter takes the value **sources\_count** that renders the number of other groups(roles, territories etc) that this group is also a part of.

- nameoptional



Use this parameter when you want to filter out a user group by its name.

- pageoptional



To get the list of records from the respective pages. Default value for page is 1. **Possible values:** Positive integer values only.

- per\_pageoptional



To get the list of records available per page. The default and the maximum possible value is 200. **Possible values:** Positive integer values only.

- filtersstring, optional



The parameter allows you to filter the users group.



The following is the JSON structure for the value to provide in the **filters** parameter for **single criteria**:

**{**

**"field": {**

**"api\_name": "name"**

**},**

**"comparator": "{{comparator\_value}}",**

**"value": "{{user\_group\_API\_name}}"**

**}**





The following is the JSON structure for the value to provide in the **filters** parameter for **multiple criteria**:

**{**

**"group\_operator": "and",**

**"group": \[**\
\
**{**\
\
**"field": {**\
\
**"api\_name": "name"**\
\
**},**\
\
**"comparator": "{{comparator\_value}}",**\
\
**"value": "{{user\_group\_API\_name}}"**\
\
**},**\
\
**{**\
\
**"field": {**\
\
**"api\_name": "name"**\
\
**},**\
\
**"comparator": "{{comparator\_value}}",**\
\
**"value": "{{value}}"**\
\
**}**\
\
**\]**

**}**





  - fieldsJSON object, mandatory



    Represents the field used to filter the users group.



    - api\_namestring, mandatory



      Represents the API name of the filter to query. **Supported value :**"name"
  - comparatorstring, mandatory



    Represents the comparison operator used in the criterion. **Supported value :** "contains" and "starts\_with"

  - valuestring, mandatory



    Specifies the value used in the criteria. Specify the users group API name using the [User Groups API](https://www.zoho.com/crm/developer/docs/api/v7/get-user-groups.html).

  - group\_operatorstring (it is mandatory to include the **group\_operator** key when specifying the **group** key.)



    Represents the group operator used in the criteria. **Supported value :**"and"

  - groupJSON array



    Represents the group of criteria used to retrieve the users group.

#### Sample Request with "include=sources\_count"

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/user_groups?include=sources_count"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "user_groups": [\
        {\
            "created_time": "2022-11-21T12:33:12+05:30",\
            "sources_count": {\
                "territories": 1,\
                "roles": 2,\
                "users": 2\
            },\
            "modified_time": "2022-11-21T13:21:46+05:30",\
            "name": "group 1",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "description": "groups API",\
            "id": "3652397000009949005",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            }\
        },\
        {\
            "created_time": "2022-11-23T9:59:12+05:30",\
            "sources_count": {\
                "users": 2\
            },\
            "modified_time": null,\
            "name": "group test",\
            "modified_by": null,\
            "description": null,\
            "id": "3652397000009952001",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            }\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 2,
        "page": 1,
        "more_records": false
    }
}
```

#### Possible Errors

- NO\_CONTENTHTTP 204



There are no user groups created for your org.

**Resolution:** Create user groups under Setup > Users & Control > Users > Groups > Create New Group.

- NO\_PERMISSIONHTTP 403



You do not have permission to view the user groups.

**Resolution:** Contact your system administrator.


#### Sample Request with "name"

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/user_groups?name=group 1"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "user_groups": [\
        {\
            "created_time": "2022-11-21T12:33:12+05:30",\
            "sources_count": {\
                "territories": 1,\
                "roles": 2,\
                "users": 2\
            },\
            "modified_time": "2022-11-21T13:21:46+05:30",\
            "name": "group 1",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "description": "groups API",\
            "id": "3652397000009949005",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            }\
        }\
],
    "info": {
        "per_page": 200,
        "count": 1,
        "page": 1,
        "more_records": false
    }
}
```

Show full

Show less

**Note**

Encode the value of the filters parameter before sending a request.

#### Sample Request using "single criteria" in the "filters" parameter

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/user_groups?filters=%7B%22field%22%3A%20%7B%22api_name%22%3A%20%22name%22%7D%2C%22comparator%22%3A%20%22starts_with%22%2C%20%22value%22%3A%20%22Test%22%7D"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "user_groups": [\
        {\
            "created_time": "2024-07-08T21:37:06+05:30",\
            "modified_time": "2024-07-08T21:37:19+05:30",\
            "name": "Test",\
            "modified_by": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            },\
            "description": null,\
            "id": "2276164000001042069",\
            "created_by": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            }\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 1,
        "page": 1,
        "more_records": false
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-user-groups.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)