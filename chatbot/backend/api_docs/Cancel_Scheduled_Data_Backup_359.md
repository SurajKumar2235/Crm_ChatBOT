
# Cancel Scheduled Data Backup

#### Purpose

To cancel the scheduled data backup of your CRM account.

#### Endpoints

[PUT /bulk/v7/backup/{id}/actions/cancel](https://www.zoho.com/crm/developer/docs/api/v7/cancel-backup.html)

### Request Details

#### Request URL

{api-domain}/crm/bulk/{version}/backup/{id}/actions/cancel

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.bulk.backup.ALL

(or)

scope=ZohoCRM.bulk.backup.UPDATE

#### Possible operation types

ALL - Full access to backup data

UPDATE - Cancel a scheduled backup

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/bulk/v7/backup/4876876000001593003/actions/cancel"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have the required scope for canceling Data Backup. Create a new client with valid scope. Refer to scope section above for more details.

- NO\_PERMISSIONHTTP 403



Permission denied to create

**Resolution:** The user does not have permission to cancel a scheduled data backup. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- ALREADY\_CANCELLEDHTTP 400



Backup is already canceled

**Resolution:** Specify a backup ID which is not canceled.

- RESOURCE\_NOT\_FOUNDHTTP 400



The requested resource doesn't exist

**Resolution:** You have specified an invalid backup ID. Specify a valid backup ID.

- INPROGRESSHTTP 400



Backup is in progress

**Resolution:** The data backup job you're trying to cancel is already in progress. You cannot cancel a backup job that is already in progress.


#### Sample Response

``` json
Copied{
    "backup": {
        "status": "success",
        "code": "SUCCESS",
        "message": "Backup stopped successfully.",
        "details": {
            "id": "4876876000001593003"
        }
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/cancel-backup.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)