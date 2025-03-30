
# Status of Transfer Records and Delete Users

#### Purpose

To get the status of the "transfer records and delete user" job scheduled previously.

#### Endpoints

[GET /users/actions/transfer\_and\_delete?job\_id={{job\_id}}](https://www.zoho.com/crm/developer/docs/api/v7/transfer-records-delete-user-status.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/users/actions/transfer\_and\_delete?job\_id={{job\_id}}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.users.READ

or

scope=ZohoCRM.users.ALL

#### Parameters

- job\_idinteger, mandatory



The ID of the job scheduled previously through the [Transfer Records and Delete User API](https://www.zoho.com/crm/developer/docs/api/v7/transfer_records-delete_user.html).


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/users/actions/transfer_and_delete?job_id=3652397000012622009"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- statusstring



Indicates the status of the job. the possible values are "completed", "failed", "in\_progress"


#### Possible Errors

- REQUIRED\_PARAM\_MISSINGHTTP 400



You have not included job\_id parameter in the request.

**Resolution:** Include the "job\_id" you received in the response of the [Transfer Records and Delete User API](https://www.zoho.com/crm/developer/docs/api/v7/transfer_records-delete_user.html).


#### Sample Response

``` json
Copied{
    "transfer_and_delete": [\
        {\
            "status": "completed"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/transfer-records-delete-user-status.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)