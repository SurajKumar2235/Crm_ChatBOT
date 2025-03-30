
# Schedule Data Backup

#### Purpose

To schedule a backup of all CRM data including attachments. You can schedule the backup to happen at selected times, or immediately. The result is available as a CSV file compressed into a ZIP file.

#### Endpoints

[POST /bulk/v7/backup](https://www.zoho.com/crm/developer/docs/api/v7/schedule-data-backup.html)

### Request Details

#### Request URL

{api-domain}/crm/bulk/{version}/backup

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.bulk.backup.ALL

(or)

scope=ZohoCRM.bulk.backup.CREATE

#### Possible operation types

ALL - Full access to backup data

CREATE - Schedule a backup

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/bulk/v7/backup"
-X POST
-d "backup_rule.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

**Note**

If you want to backup CRM data immediately, **leave the input body empty**.

#### Input JSON Keys

- rrulestring, mandatory if you want to schedule a backup at a certain time



Represents the recurring pattern to schedule a data backup at certain intervals.


#### Repeat Rule Parameters

- FREQstring, mandatory



Represents how often you want to take a backup of CRM data. The possible values are WEEKLY and MONTHLY.

- INTERVALnumber, mandatory



The gap between each scheduled backup. For example, for a weekly backup, if the INTERVAL value is 2, the gap between the first and the next backup will be two weeks. The possible values are between 1 and 52.

- BYDAYstring, mandatory if BYMONTHDAY is not specified



The day of the week the backup happens on. Applicable for daily, weekly, monthly, and yearly backups. The possible values are SU, MO, TU, WE, TH, FR, and SA.

- BYMONTHDAYnumber, mandatory if BYDAY is not specified



The day of the month the backup happens on. Applicable only for monthly and yearly backups. The possible values are between 1 and 31.


**Supported RRULE Examples**

- **rrule: "RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=TH"**: Backup scheduled for every alternate Thursday
- **rrule: "RRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=16"**: Backup scheduled for 16th of every month
- **rrule: "RRULE:FREQ=MONTHLY;INTERVAL=1;BYDAY=1TH"**: Backup scheduled for the first Thursday of every month
- **rrule: "RRULE:FREQ=MONTHLY;INTERVAL=1;BYDAY=4TH"**: Backup scheduled for the fourth Thursday of every month
- **rrule: "RRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=FR"**: Backup scheduled for every Friday

#### Sample Input

``` json
Copied{
  "backup": {
    "rrule": "RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=TU"
    }
}
```

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have the required scope for Data Backup. Create a new client with valid scope. Refer to scope section above for more details.

- NO\_PERMISSIONHTTP 403



Permission denied to create

**Resolution:** The user does not have permission to backup data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- INVALID\_DATAHTTP 400



You have specified an invalid rule or rule pattern.

**Resolution:** Specify valid recurrence rule. Refer to the Sample Input section and Input JSON keys section for more details.

- BACKUP\_ALREADY\_SCHEDULEDHTTP 400



Backup is already scheduled

**Resolution:** You have already scheduled a backup. You must wait for the scheduled backup to complete before you can schedule another.

- LIMIT\_EXCEEDEDHTTP 400



Backup limit exceeded.

**Resolution:** You have exhausted the maximum number of available backups for your CRM edition. You can wait till the next month when your data backup limits are refreshed or [purchase additional backup](https://help.zoho.com/portal/en/kb/articles/requesting-data-backup#Purchase_backup).


#### Sample Response

``` json
Copied{
    "backup": {
        "status": "success",
        "code": "SUCCESS",
        "message": "Backup scheduled successfully.",
        "details": {
            "id": "4876876000001593003"
        }
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/schedule-data-backup.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)