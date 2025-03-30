
# Get Data Backup History

#### Purpose

To fetch information about the recent data backups scheduled for your CRM account in the last one year.

#### Endpoints

[GET /bulk/{version}/backup/history](https://www.zoho.com/crm/developer/docs/api/v7/backup-history.html)

### Request Details

#### Request URL

{api-domain}/crm/bulk/{version}/backup/history

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.bulk.backup.ALL

(or)

scope=ZohoCRM.bulk.backup.READ

#### Possible operation types

ALL - Full access to backup data

READ - Fetch information about a scheduled backup

#### Parameters

- pageinteger



To get the list of records from the respective pages. Default value is **1**.

**Possible values**: Positive Integer values only.

- per\_pageinteger



To get the list of records available per page. The default and the maximum possible value is **200**.

**Possible values**: Positive Integer values only.


**Note**

Backup history for the past **one year** is available. Backup history older than one year is not available.

``` curl
Copiedcurl "https://www.zohoapis.com/crm/bulk/v7/backup/history"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- idstring



The ID of the scheduled job.

- done\_byJSON object



Details of the user who scheduled the backup. The details include the name, record ID, and the ZUID of the user.

- log\_timeDateTime



The date and time at which the backup was scheduled. This key is null if you do not specify the rrule while scheduling the backup.

- statestring



Represents the completion status of the scheduled backup. The possible values are **completed**, **failure** and **null**. Null value is returned when the backup is in progress or in scheduled state.

- actionstring



Represents the action taken for the scheduled backup. The possible values are **scheduled**, **stopped**, **purchased** and **null**. Null value is returned if the status is **completed** or **failed**.

- repeat\_typestring



Represents the repeat type for the scheduled backup. The possible values are **immediate**, **weekly**, **biweekly** and **monthly**.

- file\_namestring



Represents the name of the zip file available for download.

- countinteger



Represents the extra purchased backup count for the customer.


**Note**

If no backups were scheduled in the past one year, the system responds with a **No content** body with status code **204**.

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have the required scope. Create a new client with valid scope. Refer to scope section above for more details.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read data backup history data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.


#### Sample Response

``` json
Copied{
    "history": [\
        {\
            "id": "4876876000001758001",\
            "done_by": {\
                "id": "4876876000000327001",\
                "name": "Patricia Boyle",\
                "zuid": "756783625"\
            },\
            "log_time": "2022-07-08T13:23:05+05:30",\
            "state": null,\
            "action": "stopped",\
            "repeat_type": "biweekly",\
            "file_name": null,\
            "count": 0\
        },\
        {\
            "id": "4876876000001757002",\
            "done_by": {\
                "id": "4876876000000327001",\
                "name": "Patricia Boyle",\
                "zuid": "756783625"\
            },\
            "log_time": "2022-07-08T13:18:22+05:30",\
            "state": null,\
            "action": "scheduled",\
            "repeat_type": "biweekly",\
            "file_name": null,\
            "count": 0\
        },\
        {\
            "id": "4876876000001594002",\
            "done_by": {\
                "id": "4876876000000327001",\
                "name": "Patricia Boyle",\
                "zuid": "756783625"\
            },\
            "log_time": "2022-06-23T17:31:03+05:30",\
            "state": "completed",\
            "action": null,\
            "repeat_type": "immediate",\
            "file_name": null,\
            "count": 0\
        },\
        {\
            "id": "4876876000001593005",\
            "done_by": {\
                "id": "4876876000000327001",\
                "name": "Patricia Boyle",\
                "zuid": "756783625"\
            },\
            "log_time": "2022-06-23T17:30:51+05:30",\
            "state": null,\
            "action": "initiated",\
            "repeat_type": "immediate",\
            "file_name": null,\
            "count": 0\
        }\
    ],
    "info": {
        "page": 1,
        "per_page": 50,
        "count": 4,
        "more_records": false
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/backup-history.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)