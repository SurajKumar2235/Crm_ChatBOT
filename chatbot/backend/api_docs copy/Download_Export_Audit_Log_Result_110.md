
# Download Export Audit Log Result

#### Purpose

To download the results of an export audit log job in Zoho CRM.

The API URL for this operation is the same as the download link provided in the **"download\_links" JSON array** in the response of the [Get the Status of the Export Audit Log Job API](https://www.zoho.com/crm/developer/docs/api/v7/get-export-audit-log.html). You can also directly download the results from your browser by clicking the link, while logged into Zoho CRM.

#### Endpoint

[GET  /v2/crm/{org\_ID}/auditlog/{export\_audit\_job\_ID}/AuditLog.zip](https://www.zoho.com/crm/developer/docs/api/v7/download-export-audit-log-result.html)

[GET  /v2/crm/{org\_ID}/auditlog/{export\_audit\_job\_ID}/AuditLog.csv](https://www.zoho.com/crm/developer/docs/api/v7/download-export-audit-log-result.html)

### Request Details

#### Request URLs

**For exporting audit log data in a ZIP file:**

{download-domain}/v2/crm/{org\_ID}/auditlog/{export\_audit\_job\_ID}/AuditLog.zip

**For exporting audit log data in a CSV file:**

{download-domain}/v2/crm/{org\_ID}/auditlog/{export\_audit\_job\_ID}/AuditLog.csv

Refer to the [**Note**](https://www.zoho.com/crm/developer/docs/api/v7/download-export-audit-log-result.html#note) section to know when the system downloads files in **ZIP** format and when in **CSV** format.

#### Scope

ZohoFiles.files.READ

**Note**

- An export audit log will be in either **CSV** or **ZIP** format, depending on the number of entries in the result. If the audit log contains **100,000** or **fewer entries**, the system will automatically export the logs in a **CSV** file. If there are **more than 100,000 entries**, the logs will be split into multiple CSV files inside a **ZIP** file, with each CSV file containing up to 100,000 entries.
- A maximum of **10,00,000** audit entries will be exported in a **ZIP** file.

#### Sample Request to export audit log data in a ZIP format

``` curl
Copiedcurl "https://download.zoho.com/v2/crm/15515278/auditlog/111111000000066005/AuditLog.zip"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxd"

```

#### Sample Request to export audit log data in a CSV file format

``` curl
Copiedcurl "https://download.zoho.com/v2/crm/15515278/auditlog/111111000000066005/AuditLog.csv"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxd"

```

#### Possible Errors

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to download the export audit log data. Create a new token with valid scope. Refer to scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/download-export-audit-log-result.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)