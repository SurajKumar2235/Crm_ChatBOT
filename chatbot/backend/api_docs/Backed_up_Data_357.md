
# Download Backed up Data

#### Purpose

To download the backed up data for your CRM account.

#### Endpoints

[GET /v2/crm/{zgid}/backup/{job-id}/{file-name}](https://www.zoho.com/crm/developer/docs/api/v7/download-backup.html)

### Request Details

#### Request URL

{download-domain}/v2/crm/{zgid}/backup/{job-id}/{file-name}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoFiles.files.ALL

#### Possible operation types

ALL - Full access to backup files

To download the back up files, use the URLs from the [Get backup download URLs](https://www.zoho.com/crm/developer/docs/api/v7/get-backup-urls.html) API response. The response contains **data\_links** and **attachment\_links**.

For example: "https://download-accl.zoho.com/v2/crm/123456789/backup/3652397000001763003/Data\_001.zip"

Here, 123456789 is the unique ID ( **zgid**) of the org whose data you have backed up,

3652397000001763003 is the **ID of the backup job**, and

Data\_001.zip is the **file name**.

#### Sample Request

``` curl
Copiedcurl "https://download-accl.zoho.com/v2/crm/75734565104/backup/4876876000001781013/Data_001.zip"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

**Note**

The maximum size for the zip file is 1GB. If the data or attachment backup for the account exceeds 1GB, it will be available as multiple files of maximum 1GB size each.

#### Possible Errors

- URL\_RULE\_NOT\_CONFIGUREDHTTP 401



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- No ContentHTTP 405



Method Not Allowed

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- INVALID\_OAUTHSCOPEHTTP 401



Unauthorized

**Resolution:** Client does not have the required scope. Create a new client with valid scope. Refer to scope section above for more details.

- FORBIDDENHTTP 403



Permission denied

**Resolution:** The user does not have permission to download backed up files. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.


© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/download-backup.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)