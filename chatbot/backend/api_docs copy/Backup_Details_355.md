
# Get Data Backup Details

#### Purpose

To fetch information about the latest data backup scheduled for your CRM account.

#### Endpoints

[GET /bulk/v7/backup](https://www.zoho.com/crm/developer/docs/api/v7/get-backup-info.html)

### Request Details

#### Request URL

{api-domain}/crm/bulk/v7/backup

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.bulk.backup.ALL

(or)

scope=ZohoCRM.bulk.backup.READ

#### Possible operation types

ALL - Full access to backup data

READ - Fetch information about a scheduled backup

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/bulk/v7/backup"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- idstring



The ID of the scheduled job.

- scheduled\_dateDateTime



The date and time at which the next backup is scheduled to take place. This key is null if you do not specify the rrule while scheduling the backup.

- start\_dateDateTime



The date and time at which the first backup takes place. This key is null if you do not specify the rrule while scheduling the backup.

- rrulestring



The recurring rule for the backup schedule.

- requesterJSON object



Details of the user who scheduled the backup. The details include the name, record ID, and the ZUID of the user.

- statusstring



Represents the status of the scheduled backup. The possible values are **STOPPED**, **SCHEDULED**, **INPROGRESS**, **COMPLETED** and **FAILED**.


#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have the required scope. Create a new client with valid scope. Refer to scope section above for more details.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read data backup data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.


#### Sample Response

``` json
Copied{
    "backup": {
        "id": "4876876000001593003",
        "scheduled_date": "2022-07-26T09:58:45+05:30",
        "start_date": "2022-07-12T12:30:00+05:30",
        "rrule": "RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=TU",
        "requester": {
            "id": "4876876000000327001",
            "name": "Patricia Boyle",
            "zuid": "7534658674"
        },
        "status": "SCHEDULED"
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-backup-info.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)