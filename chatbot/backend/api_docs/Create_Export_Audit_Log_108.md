
# Create Export Audit Log

The [audit log](https://help.zoho.com/portal/en/kb/crm/security-control/audit-log/articles/monitor-audit-log#View_Audit_Log) provides a chronological sequence of actions performed by users in Zoho CRM.

#### Purpose

To export the audit log data from your Zoho CRM.

This is an asynchronous API, and an export job will be scheduled to export the audit log details. The exported audit log will be downloaded as either a **CSV** file or a **ZIP** file. You can check the job's status using the [Get the Status of the Export Audit Log Job API](https://www.zoho.com/crm/developer/docs/api/v7/get-export-audit-log.html). Once the job is complete, you can download the results using the [Download Export Audit Log Result API](https://www.zoho.com/crm/developer/docs/api/v7/download-export-audit-log-result.html).

#### Endpoints

[POST/settings/audit\_log\_export](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/audit\_log\_export

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.settings.audit\_logs.CREATE

**General Notes**

- Users in the **Administrator** profile or **CEO** Role can access the audit logs. However, other users can only view their own and their sub-ordinates' audit Logs.
- The sample request, by default, exports up to the last **three years** of audit log data across all modules in your Zoho CRM.
- The **input request is optional** i.e., if you skip the input request, the system will still export all actions in Zoho CRM.
- Use **filters to export specific audit entries** as detailed below.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/audit_log_export"
-X POST
-d "@input.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Input JSON Keys To Export Audit Log Using Single Filter

- audit\_log\_exportJSON array, mandatory



Contains the details for the audit log export request.



  - criteriaJSON object, mandatory



    To export the data log based on specific criteria. The system will only export the data log matching the given criteria.



    - fieldJSON object, mandatory



      Represents the field to be filtered. The system will only export the data log based on the specified field.



      - api\_namestring, mandatory



        Represents the API name of the field to be filtered.



        **Supported values :**



- _**action**_\- To filter the entries based on the actions that have been performed on the records.
- _**done\_by**_ \- To export the log of actions performed by specific org users.
- _**module**_ \- To export the log of actions performed on specific modules.
- _**audited\_time**_ \- To export the log of actions performed in the chosen timeframe.

**Note :** Each attribute's supported comparators and their corresponding values are listed in the [table](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html#api_table) below.
    - comparatorJSON object, mandatory



      Represents the comparison operator used in the criteria to export the data log. The value of the " **comparator"** key will vary based on the value given in the [api\_name](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html#api_name_value).



      - **Supported comparators: "** between", "in", and "equal".
    - value(datatype for the value key will vary depending on the attribute of the "api\_name" key), mandatory



      Represents the value used in the criteria. Based on the value and its corresponding comparator, the data log will be exported.

The table below represents the supported comparators and its corresponding values for each attribute in the **"api\_name"** key:

| api\_name | Supported Comparators | Supported values |
| --- | --- | --- |
| action | **"equal"** and **"in"** | **"added"**, **"updated"**, and **"deleted"** |
| done\_by | **"equal"** and **"in"** | Specify the unique IDs of the Zoho CRM users. <br>To get the unique IDs, use the [GET Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html). |
| module | **"equal"** and **"in"** | Specify the Module API names and unique IDs, using the [GET Module Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/module-meta.html). |
| audited\_time | **"between"** | Specify the audited time range in the JSON array.<br>**Example** : "2024-07-13T00:00:00+05:30" <br>Note that the audited time range should not exceed **180** days. |

#### Sample Input to Export Audit Log Data Using Single Filter

``` json
Copied{
    "audit_log_export": [\
        {\
            "criteria": {\
                "comparator": "between",\
                "field": {\
                    "api_name": "audited_time"\
                },\
                "value": [\
                    "2024-07-13T00:00:00+05:30",\
                    "2024-07-20T23:59:59+05:30"\
                ]\
            }\
        }\
    ]
}
```

#### Input JSON Keys To Export Audit Log Using Multiple Filters

- audit\_log\_exportJSON array, mandatory



Contains the details for the audit log export request.



  - criteriaJSON object, mandatory



    To export the data log based on specific criteria. The system will only export the data log matching the given criteria.



    - group\_operatorstring (it is mandatory to include the **group\_operator** key when specifying the **group** key.)



      Represents the group operator used in the criteria. Supported value: "and **"**.

    - groupJSON array



      Represents the group of criteria used for exporting CRM data logs.

    - fieldJSON object, mandatory



      Represents the field to be filtered. The system will only export the data log based on the specified field.



      - api\_namestring, mandatory



        Represents the API name of the field to be filtered. To know the supported values, refer to the above [Sample Input Section](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html#api_name_value).
    - comparatorJSON object, mandatory



      Represents the comparison operator used in the criteria to export the data log. **Supported comparators: "** between", "in", and "equal".

    - value(datatype for the value key will vary depending on the attribute of the "api\_name" key), mandatory



      Represents the value used in the criteria. Based on the value and its corresponding comparator, the data log will be exported.

**Filter Specific Notes (single and multiple criteria)**

- You can export up to the last **3 years** of audit log data **without filters**. **With filters** (either single or multiple criteria), you can export up to **6 months** _(180 days)_ of audit log data. Note that the audited time range should not exceed **180 days**.

**Downloadable File Specific Notes**

- An export audit log will be in either **CSV** or **ZIP** format, depending on the number of entries in the result. If the audit log contains **100,000** or **fewer entries**, the system will automatically export the logs in a **CSV** file. If there are **more than 100,000 entries**, the logs will be split into multiple CSV files inside a **ZIP** file, with each CSV file containing up to 100,000 entries.
- A maximum of **10,00,000** audit entries will be exported in a **ZIP** file.

#### Sample Input to Export Audit Log Data Using Multiple Filters

``` json
Copied{
    "audit_log_export": [\
        {\
            "criteria": {\
                "group_operator": "and",\
                "group": [\
                    {\
                        "field": {\
                            "api_name": "action"\
                        },\
                        "comparator": "equal",\
                        "value": "updated"\
                    },\
                    {\
                        "group_operator": "and",\
                        "group": [\
                            {\
                                "field": {\
                                    "api_name": "done_by"\
                                },\
                                "comparator": "in",\
                                "value": [\
                                    {\
                                        "name": "Kane",\
                                        "id": "2276164000000799020"\
                                    },\
                                    {\
                                        "name": "Patricia",\
                                        "id": "2276164000000799326"\
                                    }\
                                ]\
                            },\
                            {\
                                "group_operator": "and",\
                                "group": [\
                                    {\
                                        "field": {\
                                            "api_name": "audited_time"\
                                        },\
                                        "comparator": "between",\
                                        "value": [\
                                            "2023-12-05T00:00:00+05:30",\
                                            "2024-01-04T23:59:59+05:30"\
                                        ]\
                                    },\
\
                                    {\
                                        "field": {\
                                            "api_name": "module"\
                                        },\
                                        "comparator": "in",\
                                        "value": [\
                                            {\
                                                "api_name": "Leads",\
                                                "id": "2276164000000000125"\
                                            },\
                                            {\
                                                "api_name": "Contacts",\
                                                "id": "2276164000000000129"\
                                            }\
                                        ]\
                                    }\
                                ]\
                            }\
                        ]\
                    }\
                ]\
            }\
        }\
    ]
}
```

Show full

Show less

The above input represents the criteria to export audit log data updated by either **Patricia** or **Boyle**, or both, in the **Leads** and **Contacts** modules within the specified **time** and **date** range.

#### Possible Errors

- INVALID\_DATAHTTP 400



- The audited time range exceeds the supported limit

**Resolution:** To export the audit log, make sure that the time range specified in the **"value" JSON array** for the audited time range does not exceed **180 days**.
- The value given seems to be invalid

**Resolutions:**
  - The value give in the "group\_operator" key seems to be invalid. The supported value : "and"
  - Specify valid values to the "comparator" key. Refer to the above [Sample Input Section](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html#multi_filter).

- ALREADY\_SCHEDULEDHTTP 400



The data log has already been scheduled

**Resolution:** You can check the details of the exported audit log using the [Get the Status of the Export Audit Log Job API](https://www.zoho.com/crm/developer/docs/api/v7/get-export-audit-log.html).

- AMBIGUITY\_DURNG\_PROCESSINGHTTP 400



Amibiguity while processing the request

**Resolutions:** Specify the correct API names and IDs for the modules and Zoho CRM users.



- To get the Module API names and unique IDs, use the [GET Module Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/module-meta.html).
- To get the unique IDs of Zoho CRM Users, use the [GET Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html).

- NOT\_SUPPORTEDHTTP 400



- The value given in the "api\_name" key in the "field JSON object" is not supported

**Resolution:** Specify a valid value. See the [supported values](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html#api_name_key).
- The value given in the "value" key in the "criteria JSON object" is not supported

**Resolution:** Specify a valid value. Refer to the above [Sample Input Section](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html#multi_filter).

- EXPECTED\_FIELD\_MISSINGHTTP 400



One or more expected fields are missing

**Resolution:** The " **criteria JSON object**" should not be empty. Refer to the above [Sample Input Section](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html#multi_filter).

- DEPENDENT\_MISMATCHHTTP 400



The datatype of the " **value**" key in the criteria seems to be invalid.

**Resolution:** Specify valid datatypes. Refer to the above [Sample Input Section](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html#multi_filter).

- LIMIT\_EXCEEDEDHTTP 400



- The **"audit\_log\_export" JSON array** size has exceeded the allowed limit

**Resolution:** Specify the **"audit\_log\_export" JSON array** within the allowed limit. The supported limit is **1**. Refer to the above [Sample Input Section](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html#multi_filter) for the sample JSON structure.
- The **"group JSON array"** size has exceeded the allowed limit

**Resolution:** Specify the **"group" JSON array** within the given limit. The supported limit is **2**.  Refer to the above [Sample Input Section](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html#multi_filter).

- MANDATORY\_NOT\_FOUNDHTTP 400



- The required key **"ID"** seems to be missing.

**Resolution:** It is mandatory to specify the unique IDs of the Zoho CRM users when the value of the " **api\_name**" is " **done\_by**". To get the unique IDs of Zoho CRM Users, use the [GET Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html).
- The required fields are missing

**Resolutions:**
  - The criteria given seem to be empty. Specify a valid values in the criteria. Refer to the above [Sample Input Section](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html#multi_filter).
  - The " **api\_name**" key is missing in the field JSON object. Please ensure to include the " **api\_name**" key with a valid value.
  - One or more filters have been provided without corresponding criteria. Proceed by specifying valid criteria for each filter. Refer to the above [Sample Input Section](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html#multi_filter).
  - The " **api\_name**" in the **"field" JSON object** should not be empty. Refer to the above [Sample Input Section](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html#api_name_value).

- DEPENDENT\_FIELD\_MISSINGHTTP 400



Dependent keys are missing

**Resolutions:**



- Specify the **group\_operator** key when you include the **group JSON array** to apply multiple filters, and vice versa.  Refer to the above [Sample Input Section](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html#multi_filter).
- Specify the " **comparator**" and " **value**" keys when you include the " **field JSON object**", and vice versa. Refer to the above [Sample Input Section](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html#multi_filter).

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to export the Zoho CRM audit log. Create a new token with valid scope. Refer to scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- NO\_PERMISSIONHTTP 403



Permission denied

**Resolution:** Contact the system admin.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
    "audit_log_export": [\
        {\
            "status": "success",\
            "code": "SCHEDULED",\
            "message": "ExportAuditlog scheduled successfully.",\
            "details": {\
                "id": "2276164000001019012"\
            }\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)