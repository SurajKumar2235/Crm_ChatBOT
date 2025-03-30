
# Get Entity Score

#### Purpose

To get the entity score of a record.

#### Endpoints

[GET /{module\_api\_name}/{record\_id}/Entity\_Scores\_\_s](https://www.zoho.com/crm/developer/docs/api/v7/get-entity-scores.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/Entity\_Scores\_\_s

#### Supported modules

Leads, Accounts, Contacts, Deals and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

ZohoCRM.modules.entity\_scores.READ

(and)

ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

Leads, Accounts, Contacts, Deals and Custom

#### Possible operation types

ALL - Full access to module data

READ - Get module data

#### Parameters

- fieldsstring, mandatory



Specify the API names of the fields whose details you want to receive in the response.

**Possible Values:** Positive\_Score, Negative\_Score, Touch\_Point\_Score, Touch\_Point\_Positive\_Score, Touch\_Point\_Negative\_Score, Score, Scoring\_Rule


**Note**

For non-people modules, touch point scores will always be null.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/487687600000038603/Entity_Scores__s?fields=Positive_Score,Negative_Score,Touch_Point_Score,Touch_Point_Positive_Score,Touch_Point_Negative_Score,Score,Scoring_Rule"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.03xxxxxxxxxxxxxxxxxa5317.dxxxxxxxxxxxxxxxxxfa"
```

#### Response JSON Keys

- Positive\_Scoreinteger



Represents the positive score of the specified record.

- Negative\_Scoreinteger



Represents the negative score of the specified record.

- Touch\_Point\_Scoreinteger



Represents the combined touch point score of the specified record.

- Touch\_Point\_Positive\_Scoreinteger



Represents the positive touch point score of the specified record.

- Touch\_Point\_Negative\_Scoreinteger



Represents the negative touch point score of the specified record.

- Scoreinteger



Represents the gross score of the specified record.

- idstring



Represents the entity score id.

- Scoring\_RuleJSON object



Represents the scoring rule id and name.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Positive_Score": 18,\
            "Touch_Point_Score": null,\
            "Score": 18,\
            "Negative_Score": null,\
            "Touch_Point_Negative_Score": null,\
            "Scoring_Rule": {\
                "name": null,\
                "id": "4876876000002750002"\
            },\
            "id": "4876876000002768054",\
            "Touch_Point_Positive_Score": null\
        },\
        {\
            "Positive_Score": 15,\
            "Touch_Point_Score": null,\
            "Score": 10,\
            "Negative_Score": -5,\
            "Touch_Point_Negative_Score": null,\
            "Scoring_Rule": {\
                "name": null,\
                "id": "4876876000002741001"\
            },\
            "id": "4876876000002768021",\
            "Touch_Point_Positive_Score": null\
        }\
    ],
    "info": {
        "per_page": 200,
        "next_page_token": null,
        "count": 2,
        "page": 1,
        "previous_page_token": null,
        "page_token_expiry": null,
        "more_records": false
    }
}
```

Show full

Show less

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have the required scope. Create a new client with valid scope. Refer to scope section above for more details.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read entity scores data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing

**Resolution:** Specify the **fields** parameter. Refer to the parameters section above.

- INVALID\_DATAHTTP 400



The related id given seems to be invalid

**Resolution:** Specify a valid record id.


© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-entity-scores.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)