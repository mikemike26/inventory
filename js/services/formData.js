angular.module('inventoryApp').factory('FormData', function() {
    var FormData = {},
        formTemplates = {
            sites: [
                {
                    title: "Site Details",
                    sectionType: "standard",
                    buttonText: "",
                    inputs: [
                        {
                            label: "Code",
                            placeHolder: "Enter site code",
                            type: "text",
                            model: "site.Code",
                            widthClass: "col-md-6",
                            idName: "siteCode"
                        },
                        {
                            label: "Name",
                            placeHolder: "Enter site name",
                            type: "text",
                            model: "site.Name",
                            widthClass: "col-md-6",
                            idName: "siteName"
                        },
                        {
                            label: "Type",
                            placeHolder: "Enter site type",
                            type: "text",
                            model: "site.SiteType",
                            widthClass: "col-md-6",
                            idName: "siteType"
                        },
                        {
                            label: "Phone Number",
                            placeHolder: "Enter site phone number",
                            type: "phone",
                            model: "site.PhoneNumber",
                            widthClass: "col-md-6",
                            idName: "sitePhone"
                        }
                    ]
                },
                {
                    title: "Site Address",
                    sectionType: "standard",
                    buttonText: "",
                    inputs: [
                        {
                            label: "Address",
                            placeHolder: "Enter a site address",
                            type: "text",
                            model: "site.Address.AddressLine1",
                            widthClass: "col-md-12",
                            idName: "siteAddressAddress1"
                        },
                        {
                            label: "",
                            placeHolder: "suite#/additional",
                            type: "text",
                            model: "site.Address.AddressLine2",
                            widthClass: "col-md-6",
                            idName: "siteAddressAddress2"
                        },
                        {
                            label: "City",
                            placeHolder: "Enter city",
                            type: "text",
                            model: "site.Address.City",
                            widthClass: "col-md-6",
                            idName: "siteAddressCity"
                        },
                        {
                            placeHolder: "Enter a state",
                            type: "text",
                            model: "site.Address.State",
                            widthClass: "col-md-4",
                            idName: "siteAddressState"
                        },
                        {
                            label: "Zip Code",
                            placeHolder: "Enter a zip",
                            type: "phone",
                            model: "site.Address.Zip",
                            widthClass: "col-md-4",
                            idName: "siteAddressZip"
                        },
                        {
                            label: "Country",
                            placeHolder: "Enter a country",
                            type: "text",
                            model: "site.Address.Country",
                            widthClass: "col-md-4",
                            idName: "siteAddressCountry"
                        }
                    ]
                },
                {
                    title: "Site Contact",
                    sectionType: "multiple",
                    buttonText: "Add a Contact",
                    inputs: [
                        {
                            label: "First",
                            placeHolder: "Enter a first name",
                            type: "text",
                            model: "site.Address.AddressLine1",
                            widthClass: "col-md-12",
                            idName: "siteAddressAddress1"
                        },
                        {
                            label: "Last",
                            placeHolder: "Enter a site address",
                            type: "text",
                            model: "site.Address.AddressLine2",
                            widthClass: "col-md-6",
                            idName: "siteAddressAddress2"
                        },
                        {
                            placeHolder: "Enter city",
                            type: "text",
                            model: "site.Address.City",
                            widthClass: "col-md-6",
                            idName: "siteAddressCity"
                        },
                        {
                            placeHolder: "Enter a state",
                            type: "text",
                            model: "site.Address.State",
                            widthClass: "col-md-4",
                            idName: "siteAddressState"
                        },
                        {
                            placeHolder: "Enter a zip",
                            type: "phone",
                            model: "site.Address.Zip",
                            widthClass: "col-md-4",
                            idName: "siteAddressZip"
                        },
                        {
                            placeHolder: "Enter a country",
                            type: "text",
                            model: "site.Address.Country",
                            widthClass: "col-md-4",
                            idName: "siteAddressCountry"
                        }
                    ]
                }
            ],
            vendors: {},
            circuits: {}
        };


    return FormData;
});