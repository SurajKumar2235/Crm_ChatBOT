
# Mass Convert Lead Status

#### Purpose

To get the status of the mass convert lead job scheduled previously.

#### Endpoints

[GET /Leads/actions/mass\_convert?job\_id={job\_id}](https://www.zoho.com/crm/developer/docs/api/v7/mass-convert-status.html)

### Request Details

#### Request URL

{api-domain}/Leads/actions/mass\_convert?job\_id={job\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.mass\_convert.leads.READ

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/actions/mass_convert?job_id= 3652397000009835020"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- Statusstring



Indicates the status of the mass convert lead API. Possible values are "completed", "scheduled", and "in progress", and "failed".

- Total\_Countinteger



Specifies the total number of leads that were scheduled to be converted.

- Converted\_Countinteger



Specifies the number of leads that were converted.

- Not\_Converted\_Countinteger



Specifies the number of leads that are yet to be converted.

- Failed\_Countinteger



Specifies the number of leads that were not converted.


#### Possible Errors

- REQUIRED\_PARAM\_MISSINGHTTP 400



You have not specified the job\_id in the request.

**Resolution:** The specified job\_id is not found or invalid. Specify a valid job\_id.

- INVALID\_DATAHTTP 400



The job\_id is invalid.

**Resolution:** Specify a valid job ID.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Status": "COMPLETED",\
            "Failed_Count": 0,\
            "Not_Converted_Count": 0,\
            "Total_Count": 28,\
            "Converted_Count": 28\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/mass-convert-status.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)