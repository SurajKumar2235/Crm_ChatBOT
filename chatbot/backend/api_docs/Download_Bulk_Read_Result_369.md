
# Download Bulk Read Result

#### Purpose

To download the bulk read job as a CSV or an ICS file (only for the Events module). The file would be in .zip format. Extract it to get the CSV or ICS file.

#### Endpoints

[GET /read/{job\_id}/result](https://www.zoho.com/crm/developer/docs/api/v7/bulk-read/download-result.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/read/{job\_id}/result

where job\_id is the unique ID of the bulk read job.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.bulk.read

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, and custom

#### Possible operation types

ALL - Full access to related records

READ - Get bulk read job

**Note**

- Only 10 requests for download are allowed for one-minute interval. Crossing the limit will result in an error (HTTP code :429) returned to the user as response.
- To know more about the Bulk API limits, [go here](https://www.zoho.com/crm/developer/docs/api/v7/bulk-read/limitations.html).
- The value of the fields with sensitive health data will be retrieved only when **Restrict Data access through API** option in the compliance settings is **disabled**. If the option is enabled, the value will be **empty** in the result.

#### Sample Result

#### CSV

![](https://www.zohowebstatic.com/sites/zweb/images/crm/bulk_read_result_new.jpg)

#### ICS

![](https://www.zohowebstatic.com/sites/zweb/images/crm/bulk-read-ics-sample.png)

**For CSV type export,**

- If the "fields" attribute in the query JSON is left empty, all the fields available in CRM are listed in the CSV file. In case you need only specific fields, like in the above image, please specify the fields for export.
- The "id" column is added by default in the CSV file, and it contains the id of the exported records.
- The "Data/Time" fields in the CSV file are given in the ISO8601 format.
- You can export a maximum of 200,000 records in a single API call.

**For ICS type export,**

- The "fields" attribute is not supported when you want to export the events as an ICS file.
- If you do not specify "file\_type" as "ics", the records will be exported in the CSV format, by default.
- You can export a maximum of 20,000 records in a single API call.
- To know more about the Bulk API limits on ICS file, [go here](https://www.zoho.com/crm/developer/docs/api/v7/bulk-read/limitations.html).

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.bulk.read or ZohoCRM.modules.{module\_name}.READ. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read.

**Resolution:** The user does not have the permission to read records. Contact your system administrator.

- RESOURCE\_NOT\_FOUNDHTTP 404



The requested resource doesn't exist.

**Resolution:** The job ID specified is invalid. Specify a valid job ID.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/bulk/v7/read/554023000000568002/result"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/bulk-read/download-result.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)