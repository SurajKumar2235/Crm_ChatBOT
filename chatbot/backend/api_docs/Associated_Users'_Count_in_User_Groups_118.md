
# Associated Users' Count

#### Purpose

To get the number of users associated with each user group.

**Note**

- The count includes inactive/deactivated users.


#### Endpoints

[GET /settings/user\_groups/actions/associated\_users\_count](https://www.zoho.com/crm/developer/docs/api/v7/associated-user-count-user-group.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/user\_groups/actions/associated\_users\_count

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.user\_groups.ALL

(or)

scope=ZohoCRM.settings.user\_groups.READ

#### Parameters

- pageinteger, optional



The page number from which you want to fetch the records. The default value is 1.

- per\_pageinteger, optional



The number of records you want to fetch per page. You can choose a value between 1 and 200. The default and maximum value is 200.

- filtersJSON object(encoded), optional



The criteria based on which you want to filter the response. You can filter the response based on the name of the user group and its description. The allowed comparators are **starts\_with** and **equal**. You can also have multiple criteria. Refer to the sample request for details.

**Note:** You must **encode** the value of the **filters** parameter in the request.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/user_groups/actions/associated_users_count?filters=%7B%22group_operator%22%3A%20%22or%22%2C%22group%22%3A%20%5B%7B%22field%22%3A%20%7B%22api_name%22%3A%20%22name%22%7D%2C%22comparator%22%3A%20%22equal%22%2C%22value%22%3A%20%22Tier1%22%7D%2C%7B%22field%22%3A%20%7B%22api_name%22%3A%20%22name%22%7D%2C%22comparator%22%3A%20%22equal%22%2C%22value%22%3A%20%22Tier2%22%7D%5D%7D"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON

- user\_group



The name and ID of the user group that the user is a part of.

- count



The number of users that are a part of this user group.

- info



Contains the following details:



- **per\_page** \- the maximum number of records that can be fetched per API call. The value is 200.
- **page** \- the page number from which the records are fetched in current API call.
- **count** \- the number of records that were fetched in the API call.
- **more\_records** \- Represents if there are more records that can be fetched.

#### Possible Errors

- NO\_CONTENTHTTP 204



There are no user groups.

**Resolution:** Create a user group and associate users to it before trying this API.

- INVALID\_DATAHTTP 400



The JSON structure for the "filters" parameter is invalid.

**Resolution:** Provide a valid JSON for the "filters" parameter and encode the value.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the right scope to access this API.

**Resolution:** Create a new token with the scopes mentioned in the "Scopes" section, and try this API.

- INACTIVE\_USERHTTP 403



An inactive user cannot access this API.

**Resolution:** Only active users can access this API.

- INTERNAL\_SERVER\_ERRORHTTP 500



Unhandled and unexpected exception in server.

**Resolution:** Contact support@zohocrm.com for assistance.


#### Sample Response

``` json
Copied{
    "associated_users_count": [\
        {\
            "user_group": {\
                "name": "Tier1",\
                "id": "3652397000012454002"\
            },\
            "count": 4\
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

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/associated-user-count-user-group.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)