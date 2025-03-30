
# Update Services

#### Purpose

To update the details of an existing service in your organization.

#### Endpoints

[PUT /Services\_\_s](https://www.zoho.com/crm/developer/docs/api/v7/update-services.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Services\_\_s

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.services.{operation\_type}

#### Possible operation types

ALL - Full access to services data

UPDATE - Update services data

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Services__s"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"

```

**Note**

- The sample input section on the right is given an update request body for the sample service discussed in the [Create Services](https://www.zoho.com/crm/developer/docs/api/v7/create-services.html) API.

#### Request JSON Keys

- idstring, mandatory



Denotes the distinctive ID of the service which has to be updated. Make a [GET Services](https://www.zoho.com/crm/developer/docs/api/v7/get-services.html) API call to get the IDs of services.

- Durationinteger, mandatory



Represents the amount of time for which the particular service is offered.

**Possible Values**: Values are accepted only in minutes. It should be greater than 15 minutes and less than 1,440 minutes.

- Locationstring, mandatory



Provides the location where the service is offered.

**Possible Values**: 'Client Address', 'Business Address' and 'Business Address and Client Address'.

- Membersobject, mandatory



Contains the ID of users who perform the service. You can add up to 100 members for a service.

- Availability\_Typestring, mandatory



Denotes the available days of service for customers.

**Possible Values**: 'Every Business Days', 'Specific Date Range', 'Specific Date(s)', and 'Specific Day(s)'.

The availability type is changed from specific days to specific date range in the sample input.

- Available\_Fromstring, mandatory for Specific Date Range



Denotes the date from which the service is available for customers.

- Available\_Tillstring, mandatory for Specific Date Range



Denotes the date until which the service is available for customers.

- Available\_Timingsarray, optional



Contains the available time of service for the customers in the specified available days/dates. A maximum of two custom timings can be fed. Note that the customized available time should be equal or greater than the service duration. The default value is the same as the configured business hours of the organization.

- Taxarray, optional



Contains the id and value of the tax applied to the service cost. You can fetch the tax IDs and values from the [GET Fields](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) API of Services module.

A couple of taxes were added for your reference in the sample input.

- Job\_Sheet\_Requiredstring, optional



Denotes whether the members have to fill a job sheet at the end of each service appointments.

**Possible Values**: 'Yes' and 'No'. The default value is No.

Sample input is provided for disabling job sheet from a service.

- Job\_Sheet\_Section\_\_sstring, mandatory when "Job\_Sheet\_Required":"Yes"



Represents the Job Sheet which has to be associated with the service. You can make a [GET Fields](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) API call to get the available job sheets in your organization. To disable job sheet for a service, this key has to be given 'null' value.

- Statusstring, optional



Denotes whether the service is active.

**Possible Values**: 'Available', 'Temporarily Unavailable' and 'Not in Use'. The default value is available.

The status is changed from Available to Temporarily Unavailable for a couple of weeks in the sample input for your understanding.

- Unavailable\_Fromstring, mandatory when status is Temporarily unavailable or Not in Use



Represents the date and time from which the service is unavailable for customers. The values cannot be greater than the current time. Also, it should be given in the **ISO 8601 format**.

- Unavailable\_Tillstring, mandatory when status is available



Represents the date and time until which the service is unavailable for customers. It should be given in the **ISO 8601 format**.


**Note**

- You can also pass the record ID in the request. Example: {api-domain}/crm/v7/Services\_\_s/{service\_id}
- You can also use other request JSON keys mentioned in the [Create Services](https://www.zoho.com/crm/developer/docs/api/v7/create-services.html) API to update services data based on your business needs.
- You can update a maximum of 100 services per API call.

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "id":"5545974000002183001",\
            "Duration": "60",\
            "Location": "Business Address and Client Address",\
            "Members": [\
                {\
                    "Members": {\
                        "id": "5545974000000393002"\
                    },\
                    {\
                        "id": "5545974000000393003"\
                    }\
                }\
            ],\
            "Availability_Type": "Specific Date Range",\
            "Available_From": "2023-03-24",\
            "Available_Till":"2023-10-01",\
            "Available_Timings": [\
                {\
                    "From": "10:00",\
                    "To": "13:30"\
                },\
                {\
                    "From":"15:00",\
                    "To":"18:00"\
                }\
            ],\
            "Tax": [\
                {\
                    "id": "5545974000000021001",\
                    "value": "Sales Tax - 2.0 %"\
                }\
            ],\
            "Status":"Temporarily Unavailable",\
            "Unavailable_From": "2023-03-31T10:00:00+05:30",\
            "Unavailable_Till": "2023-04-14T10:00:00+05:30",\
            "Job_Sheet_Required": "No",\
            "Job_Sheet_Section__s": null\
        }\
    ]
}

```

#### Possible Errors

- DEPENDENT\_FIELD\_MISSINGHTTP 400



You have failed to provide the dependent fields of Availability\_Type, Status and Job\_Sheet\_Required keys.

**Solution:** Check the Request JSON Keys section and specify the dependent fields.

- DEPENDENT\_MISMATCHHTTP 400



You have given an invalid value for Unavailable\_Till.

**Solution:** When the status is temporarily unavailable, the value of 'Unavailable\_Till' should be greater than the current time. The value of the same key should be less than the current time if the status is available.

- DEPENDENT\_MISMATCHHTTP 400



Either 'Unavailable\_From' or 'Unavailable\_Till' is given with available status.

**Solution:** When the status is available, you can choose either not to specify 'Unavailable\_From' and 'Unavailable\_Till' keys or specify them both. You cannot specify only one of the keys.

- DEPENDENT\_MISMATCHHTTP 400



When Job\_Sheet\_Required key is given 'No', you cannot specify the Job-Sheet\_Section\_\_s.

**Solution:** Job\_Sheet\_Section\_\_s should be provided, only when Job\_Sheet\_Required is given 'Yes'.

- DEPENDENT\_MISMATCHHTTP 400



The specified Available Timings, Available\_Days or Available\_Dates do not fall within the business hours or business days of the organization.

**Solution:** Make a [GET Business Hours](https://www.zoho.com/crm/developer/docs/api/v7/get-business-hours.html) API call and specify a valid input within the business hours of your organization.

- INVALID\_DATAHTTP 400



You have given an invalid Availability\_Type.

**Solution:** You should specify any one of these 'Every Business Days', 'Specific Date Range', 'Specific Date(s)', and 'Specific Day(s)' picklist values.

- INVALID\_DATAHTTP 400



The date specified in the Available\_Dates key follows an invalid format.

**Solution:** Use only the **YYYY-MM-DD** format for dates.

- INVALID\_DATAHTTP 400



Either the 'From' or 'To' key in the Available\_Timings is invalid.

**Solution:** The custom available timings must be given in the 24 hour time format.

- INVALID\_DATAHTTP 400



You have specified an invalid Duration value.

**Solution:** Duration cannot be less than 15 minutes and greater than 1,440 minutes. Note that the value should always be in minutes.

- INVALID\_DATAHTTP 400



The specified Available\_Timings does not satisfy the service duration.

**Solution:** The value of Available\_Timings key should be equal or greater than the service duration.

- INVALID\_DATAHTTP 400



You have given an invalid Status value.

**Solution:** The only possible values are 'Available','Temporarily Unavailable' and 'Not in Use'.

- INVALID\_DATAHTTP 400



You have given an invalid value for Unavailable\_From.

**Solution:** Ensure that the value of 'Unavailable\_From' is not greater than the current time.

- INVALID\_DATAHTTP 400



You have specified either an unconfirmed or inactive user ID in the Members key.

**Solution:** You can add only active and confirmed users as a part of service members in your organization.

- INVALID\_DATAHTTP 400



The value for Available\_Till key is not greater than the value of Available\_From key.

**Solution:** When the Availability\_Type of a service is 'Specific Date Range', the Available\_Till date should be greater than the Available\_From date.

- INVALID\_MODULEHTTP 400



The module name in the request URL seems to be invalid.

**Solution:** You can use only _**Services\_\_s**_ in the request URL.

- INVALID\_REQUEST\_METHODHTTP 400



The given http request method type is invalid.

**Solution:** Use only the PUT method in the request URL to access this API.

- LIMIT\_EXCEEDEDHTTP 400



You have exceeded the maximum limit for the number of active services in an organization.

**Solution:** The maximum number of active services in an organization is 500.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



The token you used has been created using the wrong oauth scope.

**Solution:** Use either ZohoCRM.modules.services.CREATE or ZohoCRM.modules.services.ALL scope to create a new valid token.

- INVALID\_TOKENHTTP 401



You have used an invalid oauth token.

**Solution:** The token you used has expired. Kindly refresh your token and retry.

- NO\_PERMISSIONHTTP 403



You do not have permission to post any services.

**Solution:** Contact your system administrator.

- NOT\_ALLOWEDHTTP 403



Job Sheet is not configured for your organization in service preferences.

**Solution:** Enable the job sheet preference before creating services with job sheets. You can update the configurations using the [Update Service Preferences](https://www.zoho.com/crm/developer/docs/api/v7/update-service-preferences.html) API.

- NOT\_ALLOWEDHTTP 403



You have specified the 'Available' status when the service availability dates are in the past.

**Solution:** You cannot mark a service as available or temporarily unavailable when the Available\_Dates are in the past.

- INVALID\_URL\_PATTERNHTTP 404



Check if you are trying to access the correct URL.

**Solution:** You have given an invalid request URL. Use only **/Services\_\_s** endpoint to provide a valid URL.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Solution:** Unexpected and unhandled exception in the server. Please contact our support team.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "Modified_Time": "2023-03-31T11:39:31+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5545974000000393001"\
                },\
                "Created_Time": "2023-03-29T14:04:15+05:30",\
                "id": "5545974000002183001",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5545974000000393001"\
                }\
            },\
            "message": "record updated",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-services.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)