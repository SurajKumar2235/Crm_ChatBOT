

# Appointments APIs

The Appointments module contains the customer details, service information, date and time of the appointment based on customer's choice and availability. A sales representative books an appointment every time a contact requests for a service from your company. Appointments APIs allow you to get, create, update, and delete them. They also allow you to set appointment preferences depending on various business needs.

### Get Appointments

#### Purpose

To get appointments data that match your search criteria.

#### Endpoints

[GET /Appointments\_\_s](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments.html)

[GET /Appointments\_\_s/{appointment\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Appointments\_\_s

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.appointments.{operation\_type}

#### Possible operation types

ALL - Full access to appointments data

READ - Get appointments data

##### Parameters

- fieldsstring, mandatory when fetching all appointments data



To list all the appointments data with respect to the fields that you specify in this parameter. Note that you can include a maximum of 50 field API names in this parameter. The [GET Fields API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) will give you the existing field API names in the Appointments module.

**Possible values**: Multiple field API names, comma separated. For example: Last\_Name,Email.

- cvidlong, optional



To get the list of appointments present in a custom view that you specify in this key. You can get the custom view ID from the [GET Custom Views API](https://www.zoho.com/crm/developer/docs/api/v7/custom-view-meta.html). You cannot use this param with the "sort\_by" param.

**Possible values**: {custom\_view\_id}.

- page\_tokenstring, mandatory to fetch more than 2000 appointments by pagination



You can use the "page" param to fetch up to 2000 appointments without "page\_token". To fetch more than 2000 appointments, you must include the "page\_token" param in the request. This param takes the value from the key "next\_page\_token" in the response of the first GET Appointments call. This token value is user-specific and if you use another user's token, the system will throw an error.

The page token is bound to parameters and expires in 24 hours. Also, you cannot use this param with the "page" param.

- pageinteger, optional



To get the list of appointments from the respective pages. The default value is **1**. Note that you cannot use this param with the "page\_token" param.

**Possible values**: Positive integer values only.

- per\_pageinteger, optional



To get the list of appointments available per page. The default and the maximum possible value is **200**.

**Possible values**: Positive integer values only.

- sort\_orderstring, optional



To sort the available list of appointments in either ascending or descending order.

**Possible values**: **asc** \- ascending order, **desc** \- descending order. The default value is 'desc'.

- sort\_bystring, optional



To sort the appointments based on the fields **id**, **Created\_Time**, and **Modified\_Time**. Note that you cannot use this param with the "cvid" param. The default field is 'id'.


**Note**

- **sort\_order** applies to given **sort\_by** field.
- If your requirement is to fetch under 2000 appointments, use the "page" and "per\_page" parameters (page=1 to 10, per\_page=200).
- If you want to paginate for more than 2000 appointments, use the "page\_token" parameter you receive in the first response. You will have to pass the page token received from the response with param **page=10** to get records from 2001 to 2200. If there are more appointments, the API responses, will have "next\_page\_token" and "previous\_page\_token" for easy pagination.

Using the page tokens from the consecutive requests, you can navigate and fetch up to **100,000** appointments.
- In both the above scenarios, the maximum appointments per request will be only 200.
- Subform data will not be retrieved, while retrieving multiple appointments. You have to specify the individual appointment ID in the request URL to fetch the data in the subform.
- The value of the fields with sensitive health data will be retrieved **only** when **Restrict Data access through API** option in the compliance settings is **disabled**. If the option is enabled, the value will be **null**. Refer to [HIPAA compliance](https://www.zoho.com/crm/developer/docs/api/v7/hipaa-compliance.html) for more details.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Appointments__s?fields=Service_Name,Appointment_Name,Appointment_For,Owner"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- AMBIGUITY\_DURING\_PROCESSINGHTTP 400



You cannot use both cvid and sort\_by, and page and page\_token

**Solution:** Use either "cvid" or "sort\_by" param in the request. Similarly, use either "page" or "page\_token" in the request.

- DISCRETE\_PAGINATION\_LIMIT\_EXCEEDEDHTTP 400



You can only get the first 2000 records without using page\_token param.

**Solution:** If you want to fetch more than 2000 records, you must use the "page\_token" param.

- EXPIRED\_VALUEHTTP 400



Your page token has expired.

**Solution:** page\_token is valid only for 24 hours from the time it was generated.

- INVALID\_DATAHTTP 400



You have used an invalid page\_token or the one generated by another user.

**Solution:** page\_token is user-specific. Use the one generated from your API call.

- INVALID\_MODULEHTTP 400



You have given an invalid module name in the request URL.

**Solution:** You can use only _**Appointments\_\_s**_ in the request URL.

- INVALID\_REQUEST\_METHODHTTP 400



You have given an invalid http request method type.

**Solution:** Use only GET method in the request URL to access this API.

- LIMIT\_EXCEEDEDHTTP 400



You exceeded the field limits.

**Solution:** You can only include a maximum of 50 field API names in the "fields" param.

- TOKEN\_BOUND\_DATA\_MISMATCHHTTP 400



You have either specified an invalid page\_token or the input param is added, altered, or deleted.

**Solution:** The page\_token is bound to the parameters used in the request. Do not change the parameters and use the page token from the response.

- PAGINATION\_LIMIT\_EXCEEDEDHTTP 400



You can only get up to first 100,000 records using page\_token param.

**Solution:** You can fetch a maximum of 100,000 records using the page\_token param in the response of GET appointments API.

- REQUIRED\_PARAM\_MISSINGHTTP 400



You failed to specify either the field API names or page token in the parameter.

**Solution:** It is mandatory to specify the field API names when you want to get the data of all the appointments. The page token is mandatory to provide appointments more than 2000.

- INVALID\_TOKENHTTP 401



You have used an invalid oauth token.

**Solution:** The access token you used has expired. Kindly refresh your token and retry.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You created the grant token using the wrong oauth scope.

**Solution:** Use either ZohoCRM.modules.appointments.READ or ZohoCRM.modules.appointments.ALL scope to create a new valid grant token.

- NO\_PERMISSIONHTTP 403



You do not have permission to get any data of appointments.

**Solution:** Contact your system administrator.

- INVALID\_URL\_PATTERNHTTP 404



Check if you are trying to access the correct URL.

**Solution:** You have given an invalid request URL. Refer to the above endpoints section.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Solution:** Unexpected and unhandled exception in the server. Please contact our support team.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Owner": {\
                "name": "Patricia Boyle",\
                "id": "5545974000001170042",\
                "email": "p.boyle@abc.com"\
            },\
            "Service_Name": {\
                "name": "Wall Painting",\
                "id": "5545974000002138033"\
            },\
            "Appointment_For": {\
                "module": {\
                    "api_name": "Contacts",\
                    "id": "5545974000000002179"\
                },\
                "name": "Lilly Jones",\
                "id": "5545974000000566131"\
            },\
            "Appointment_Name": "Wall Painting - Lilly Jones",\
            "id": "5545974000002142019"\
        },\
        {\
            "Owner": {\
                "name": "Jack Smith",\
                "id": "5545974000000393001",\
                "email": "j.smith@abc.com"\
            },\
            "Service_Name": {\
                "name": "Bike Service",\
                "id": "5545974000000488035"\
            },\
            "Appointment_For": {\
                "module": {\
                    "api_name": "Contacts",\
                    "id": "5545974000000002179"\
                },\
                "name": "John Williams",\
                "id": "5545974000000955053"\
            },\
            "Appointment_Name": "Bike Service - John Williams",\
            "id": "5545974000002142007"\
        },\
        {\
            "Owner": {\
                "name": "Edward Wilson",\
                "id": "5545974000000393001",\
                "email": "e.wilson@abc.com"\
            },\
            "Service_Name": {\
                "name": "AC Repair",\
                "id": "5545974000002098002"\
            },\
            "Appointment_For": {\
                "module": {\
                    "api_name": "Contacts",\
                    "id": "5545974000000002179"\
                },\
                "name": "Mary Brown",\
                "id": "5545974000000955055"\
            },\
            "Appointment_Name": "AC Repair - Mary Brown",\
            "id": "5545974000002140041"\
        }\
    ],
    "info": {
        "per_page": 200,
        "next_page_token": null,
        "count": 3,
        "sort_by": "id",
        "page": 1,
        "previous_page_token": null,
        "page_token_expiry": null,
        "sort_order": "desc",
        "more_records": false
    }
}

```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)