pragma solidity ^0.4.18;

contract Contract{
    
    struct PersonalInfo{
        string fName;
        string lName;
        string dateOfBirth;
        string placeOfBirth;
        string ssn;
        string sex;
        uint age;
        Family familyInf;
        Education education;
        HomeAddress homeAddress;
    }
    
    struct Family{
        string father;
        string mother;
       
    }
    
    struct Education{
        string college;
        string bachelorType;
        string major;
        string gpa;
        bool isCompleted;
        bool isEnrolled;
        
    }
    
    struct HomeAddress{
        string country;
        string city;
        string street;
        string apt;
        string zipCode;
    }


 

    mapping (string => PersonalInfo) people;
    string[] public peopleData;
    
    function addPerson(string _fName, string _lName, string _dateOfBirth, string _placeOfBirth, string _ssn, string _sex )public {
        var personalInfo = people[_ssn];
        
        personalInfo.fName = _fName;
        personalInfo.lName = _lName;
        personalInfo.dateOfBirth = _dateOfBirth;
        personalInfo.placeOfBirth = _placeOfBirth;
        personalInfo.ssn = _ssn;
        personalInfo.sex = _sex;
     
        
        peopleData.push(_ssn) -1;
    }
   
    function addFamilyData (string _ssn, string _father, string _mother) public{
        var personalInfo = people[_ssn];
        
        personalInfo.familyInf.father = _father;
        personalInfo.familyInf.mother = _mother;
        
    }
    
    function addEducation (string _ssn, string _college, string _bachelorType, string _major, string _gpa, bool _isCompleted, bool _isEnrolled) public{
        var personalInfo = people[_ssn];
        
        personalInfo.education.college=_college;
        personalInfo.education.bachelorType = _bachelorType;
        personalInfo.education.major= _major;
        personalInfo.education.gpa = _gpa;
        personalInfo.education.isCompleted = _isCompleted;
        personalInfo.education.isEnrolled = _isEnrolled;
    }
    
    
    function addAddress( string _ssn, string _country, string _city, string _street, string _apt, string _zipCode) public {
        var personalInfo = people[_ssn];
        
        personalInfo.homeAddress.country = _country;
        personalInfo.homeAddress.city = _city;
        personalInfo.homeAddress.street = _street;
        personalInfo.homeAddress.apt = _apt;
        personalInfo.homeAddress.zipCode = _zipCode;
        
        
    }
    
   
   
    
    function getPerson(string _ssn) view public returns (string,string,string,string,string,string){
        return (people[_ssn].fName,people[_ssn].lName,people[_ssn].dateOfBirth,people[_ssn].placeOfBirth,people[_ssn].ssn,people[_ssn].sex);
        
    }
    
    function getFamily(string _ssn) view public returns (string,string){
        return (people[_ssn].familyInf.father, people[_ssn].familyInf.mother);
        
    }
    
    function getEducation(string _ssn) view public returns (string,string,string,string,bool,bool) {
        return (people[_ssn].education.college, people[_ssn].education.bachelorType,people[_ssn].education.major,people[_ssn].education.gpa,people[_ssn].education.isCompleted,people[_ssn].education.isEnrolled);
        
    }
    
    function getAddress(string _ssn) view public returns (string,string,string,string,string){
        return (people[_ssn].homeAddress.country,people[_ssn].homeAddress.city,people[_ssn].homeAddress.street,people[_ssn].homeAddress.apt,people[_ssn].homeAddress.zipCode);
    }
    
    
    
    
    
    
}