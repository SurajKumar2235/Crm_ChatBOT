
# Create Services

#### Purpose

To add new services to your organization.

#### Endpoints

[POST /Services\_\_s](https://www.zoho.com/crm/developer/docs/api/v7/create-services.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Services\_\_s

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.services.{operation\_type}

#### Possible operation types

ALL - Full access to services data

CREATE - Create new services

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Services__s "
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"

```

#### Request JSON Keys

- Service\_Namestring, mandatory



Represents the name of the service and it accepts alphanumeric characters.

- Durationinteger, mandatory



Represents the amount of time for which the particular service is offered.

**Possible Values**: Values are accepted only in minutes. It should be greater than 15 minutes and lesser than 1,440 minutes.

- Locationstring, mandatory



Provides the location where the service is offered.

**Possible Values**: 'Client Address', 'Business Address' and 'Business Address and Client Address'.

- MembersJSON object, mandatory



Contains the ID of users who perform the service. You can add up to 100 members for a service.

- Availability\_Typestring, mandatory



Denotes the available days of service for customers.

**Possible Values**: 'Every Business Days', 'Specific Date Range', 'Specific Date(s)', and 'Specific Day(s)'.

- Available\_Fromstring, mandatory for Specific Date Range



Denotes the date from which the service is available for customers.

- Available\_Tillstring, mandatory for Specific Date Range



Denotes the date until which the service is available for customers.

- Available\_DatesJSON array, mandatory for Specific Date(s)



Contains the list of dates on which the service is available for customers. You can provide a maximum of 20 business dates. The values must follow the **YYY-MM-DD** format.

- Available\_DaysJSON array, mandatory for Specific Day(s)



Contains the list of business days on which the service is available for customers.

- Priceinteger, mandatory



Denotes the cost allocated for the service. It takes the locale currency value configured in your organization. You can specify a maximum of 16 digits with 2 decimal places.

- Available\_TimingsJSON array, optional



Contains the available time of service for the customers in the specified available days/dates. A maximum of two custom timings can be fed. Note that the customized available time should be equal to or greater than the service duration.

The default value is the same as the configured business hours of the organization.

The value of 'From' and 'To' keys must be given in the 24 hour time format.

- TaxJSON array, optional



Contains the ID and value of the tax applied to the service cost. You can fetch the tax IDs and values from the [GET Fields](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) API of Services module.

- Job\_Sheet\_Requiredstring, optional



Denotes whether the members have to fill in a job sheet at the end of each service appointment.

**Possible Values**: 'Yes' and 'No'. The default value is No.

- Job\_Sheet\_Section\_\_sstring, mandatory only when "Job\_Sheet\_Required":"Yes"



Represents the Job Sheet which has to be associated with the service. Make a [GET Fields](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) API call to get the details of available job sheets in your organization. When Job\_Sheet\_Required is given 'No', the Job\_Sheet\_Section\_\_s can either be null or not specified.

- Statusstring, optional



Denotes whether the service is active.

**Possible Values**: 'Available', 'Temporarily Unavailable' and 'Not in Use'. The default value is Available.

- Unavailable\_Fromstring, mandatory when status is Temporarily Unavailable or Not in Use



Represents the date and time from which the service is unavailable for customers. The values cannot be greater than the current time. Also, it should be given in the **ISO 8601 format**.

- Unavailable\_Tillstring, mandatory when status is Temporarily Unavailable



Represents the date and time until which the service is unavailable for customers. It should be given in the **ISO 8601 format**.

- Descriptionstring, optional



Represents the description of the service, if any.


**Note**

- You can create a maximum of 100 services per API call.
- An organization can have a maximum of 500 active services.
- When the Status is **Available**, the keys 'Unavailable\_From' and 'Unavailable\_Till' are not mandatory. If you provide values, ensure that the 'Unavailable\_Till' is less than the current time.
- Services with **Not in Use** Status can be created outside the business hours and business days.

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "Service_Name": "AC Repair",\
            "Duration": "60",\
            "Location": "Client Address",\
            "Members": [\
                {\
                    "Members": {\
                        "id": "5545974000000393001"\
                    }\
                }\
            ],\
            "Availability_Type": "Specific Day(s)",\
            "Available_Days": [\
                "Monday",\
                "Tuesday"\
            ],\
            "Available_Timings": [\
                {\
                    "From": "10:00",\
                    "To": "18:30"\
                }\
            ],\
            "Price": 230.66,\
            "Tax": [\
                {\
                    "id": "5545974000000021003",\
                    "value": "Vat - 0.8 %"\
                }\
            ],\
            "Status":"Available",\
            "Job_Sheet_Required": "Yes",\
            "Job_Sheet_Section__s": "Standard",\
            "Description":"AC repair and service at your doorstep."\
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

**Solution:** When the status is temporarily unavailable, the value of 'Unavailable\_Till' should be greater than the current time. The value of the same key should be less than the current time if the status is available.

- DEPENDENT\_MISMATCHHTTP 400



You have given either 'Unavailable\_From' or 'Unavailable\_Till' keys with available status.

**Solution:** When the status is available, you can choose either not to specify 'Unavailable\_From' and 'Unavailable\_Till' keys or specify them both. You cannot specify only one of the keys.

- DEPENDENT\_MISMATCHHTTP 400



When you have specified the Job\_Sheet\_Required key as 'No', you cannot specify the Job-Sheet\_Section\_\_s.

**Solution:** Job\_Sheet\_Section\_\_s should be provided, only when Job\_Sheet\_Required is given 'Yes'.

- DEPENDENT\_MISMATCHHTTP 400



The specified Available Timings, Available\_Days or Available\_Dates do not fall within the business hours or business days of the organization.

**Solution:** Make a [GET Business Hours](https://www.zoho.com/crm/developer/docs/api/v7/get-business-hours.html) API call and specify a valid input within the business hours of your organization.

- INVALID\_DATAHTTP 400



You have given an invalid Availability\_Type.

**Solution:** You should specify any one of these 'Every Business Days', 'Specific Date Range', 'Specific Date(s)', and 'Specific Day(s)' picklist values.

- INVALID\_DATAHTTP 400



You have given an invalid date format for the Available\_Dates key.

**Solution:** Use only **YYYY-MM-DD** format for dates.

- INVALID\_DATAHTTP 400



You have specified an invalid value for either the 'From' or 'To' key in the Available\_Timings.

**Solution:** The custom available timings must be given in the 24 hour time format.

- INVALID\_DATAHTTP 400



You have specified an invalid Duration value.

**Solution:** Duration cannot be less than 15 minutes and greater than 1,440 minutes. Note that the value should always be in minutes.

- INVALID\_DATAHTTP 400



Your value for Available\_Timings does not satisfy the service duration.

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



More than 100 users cannot be associated.

**Solution:** You are allowed to add only up to 100 members to a service.

- INVALID\_DATAHTTP 400



The value for Available\_Till key is not greater than the value of Available\_From key.

**Solution:** When the Availability\_Type of a service is 'Specific Date Range', the Available\_Till date should be greater than the Available\_From date.

- INVALID\_MODULEHTTP 400



You have given an invalid module name in the request URL.

**Solution:** You can use only _**Services\_\_s**_ in the request URL.

- INVALID\_REQUEST\_METHODHTTP 400



You have specified an invalid http request method type.

**Solution:** Use only the POST method in the request URL to access this API.

- LIMIT\_EXCEEDEDHTTP 400



You have exceeded the maximum limit for the number of active services in an organization.

**Solution:** The maximum number of active services in an organization is 500.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You created the grant token using the wrong oauth scope.

**Solution:** Use either ZohoCRM.modules.services.CREATE or ZohoCRM.modules.services.ALL scope to create a new valid grant token.

- INVALID\_TOKENHTTP 401



You have used an invalid oauth token.

**Solution:** The access token you used has expired. Kindly refresh your token and retry.

- NO\_PERMISSIONHTTP 403



You do not have permission to create any services.

**Solution:** Contact your system administrator.

- NOT\_ALLOWEDHTTP 403



Job Sheet is not configured for your organization in service preferences.

**Solution:** Enable the job sheet preference before creating services with job sheets. You can update the configurations using the [Update Service Preferences](https://www.zoho.com/crm/developer/docs/api/v7/update-service-preferences.html) API.

- NOT\_ALLOWEDHTTP 403



You have specified the 'Available' status when the service availability dates are in the past.

**Solution:** You cannot mark a service as available or temporarily unavailable when the Available\_Dates are in the past.

- INVALID\_URL\_PATTERNHTTP 404



Check if you are trying to access the correct URL.

**Solution:** You have given an invalid request URL. Use only **/Services\_\_s** endpoint in the URL.

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
                "Modified_Time": "2023-03-29T21:19:19+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5545974000000393001"\
                },\
                "Created_Time": "2023-03-29T21:19:19+05:30",\
                "id": "5545974000002180641",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5545974000000393001"\
                }\
            },\
            "message": "record added",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-services.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)