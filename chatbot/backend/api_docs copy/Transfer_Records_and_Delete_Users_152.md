
# Transfer Records and Delete User

#### Purpose

To delete a user from CRM and transfer the records to a new user. You can replace the user at the following places:

- **Ownership**: You can transfer all open records of the old user to the new user.
- **Assignment**: You can replace the old user with new at places like assignment rules, escalation rules, field updates, automation actions etc.
- **Configuration/criteria**: You can replace the user where the old user is used in criteria for custom views, automation, reports etc.

When you delete a user through this API, a scheduler schedules a job and returns the job ID in the response. Use the [Status API](https://www.zoho.com/crm/developer/docs/api/v7/transfer-records-delete-user-status.html) to check the status of the job.

#### Endpoints

[POST /users/actions/transfer\_and\_delete](https://www.zoho.com/crm/developer/docs/api/v7/transfer_records-delete_user.html)

[POST /users/{user\_id}/actions/transfer\_and\_delete](https://www.zoho.com/crm/developer/docs/api/v7/transfer_records-delete_user.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/users/actions/transfer\_and\_delete

**To delete a specific user:**

{api-domain}/crm/{version}/users/{user\_id}/actions/transfer\_and\_delete

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.users.ALL

(or)

scope=ZohoCRM.users.DELETE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/users/actions/transfer_and_delete"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
-X POST
```

##### Input JSON

- idstring, mandatory if not given in the request URL



The unique ID of the user that you want to delete and transfer the open records to another user. Use the [Get Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) to get the ID of the user.

- transferJSON object, mandatory



The details of the new user you want to transfer the records of the old user to.



- **id**, _string, mandatory_ \- The record ID of the user you want to transfer the records of the old user to. Use the [Get Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) to get the ID of the user.
- **records**, _Boolean, mandatory_ \- **true** indicates that you want to transfer the open records to the new user.
- **assignment**, _Boolean, mandatory_ \- **true** indicates that you want to replace the user at places such as assignment rules, escalation rules, field updates, automation actions etc.
- **criteria**, _Boolean, mandatory_ \- **true** indicates that you want to replace the user at places where the old user is used in criteria for custom views, automation, reports etc.

- move\_subordinateJSON object, mandatory if "transfer" is not given



The details of the new user you want to transfer the subordinates of the old user to.



- **id**, _string, mandatory_ \- The record ID of the user you want to transfer the subordinates of the old user to. Use the [Get Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) to get the ID of the user.

#### Sample Input

``` json
Copied{
    "transfer_and_delete": [\
        {\
            "id": "3652397000001464001",\
            "transfer": {\
                "id": "3652397000000186017",\
                "records": true,\
                "assignment": true,\
                "criteria": true\
            },\
            "move_subordinate": {\
                "id": "3652397000000186017"\
            }\
        }\
    ]
}
```

#### Possible Errors

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not included the ID of the user you want to delete.

**Resolution:** You must include the ID of the user that you want to delete either in the request URL or in the input body. Use the [Get Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) to get the ID of the user.

- EXPECTED\_FIELD\_MISSINGHTTP 400



You have neither specified "transfer" nor "move\_subordinate" in the input.

**Resolution:** Specify either "transfer" or "move\_subordinate" in the input.

- INVALID\_DATAHTTP 400



You have specified an incorrect user ID either in the URL or in the body.

**Resolution:** Specify the right user ID.

- INVALID\_DATAHTTP 400



The user you are trying to delete, or the user you want to transfer the records to is not a CRM user.

**Resolution:** You can only delete a CRM user and transfer the records to a CRM user. Use the [Get Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) to get the list of users in your org. Refer to the "details" key in the response.

- INVALID\_DATAHTTP 400



The user you are trying to delete, or the user you want to transfer the records to is already deleted.

**Resolution:** You cannot delete or transfer records to already deleted users.

- INVALID\_DATAHTTP 400



The user's ID that you are trying to transfer the records to is invalid.

**Resolution:** Provide a valid user ID.

- INVALID\_DATAHTTP 400



The user you are trying to transfer the subordinates to is inactive.

**Resolution:** You can move the subordinates only to active users.

- INVALID\_DATAHTTP 400



You have specified the user ID in the URL but the request body has more than one JSON object.

**Resolution:** If you specify the user ID in the URL, you can delete only that user, and the request body must contain details of only that user.

- INVALID\_DATAHTTP 400



You are trying to delete more than one user through this API.

**Resolution:** You can use this API to delete only one user and transfer records to another user.

- NOT\_ALLOWEDHTTP 400



The user you are trying to transfer the subordinates to is a subordinate user.

**Resolution:** You cannot move the subordinates to another subordinate user.

- NOT\_ALLOWEDHTTP 400



The user you are trying to delete is the super admin of the org.

**Resolution:** You cannot delete the super admin of the org.

- NO\_PERMISSIONHTTP 403



You are not the super admin of your org and cannot access this API.

**Resolution:** Only super admin of the org can delete a user and transfer the records.


#### Sample Response

``` json
Copied{
    "transfer_and_delete": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "jobId": "3652397000012622009",\
                "id": "3652397000001464001"\
            },\
            "message": "user is deleted successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/transfer_records-delete_user.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)