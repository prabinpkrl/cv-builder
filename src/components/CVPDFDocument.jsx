import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Create professional CV styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 0,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.4,
  },
  header: {
    backgroundColor: '#2c3e50',
    color: '#ffffff',
    padding: 40,
    textAlign: 'center',
    marginBottom: 0,
  },
  headerName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    lineHeight: 1.2,
  },
  headerRole: {
    fontSize: 16,
    marginBottom: 24,
    marginTop: 8,
    color: '#ecf0f1',
    fontWeight: 300,
    fontStyle: 'italic',
    lineHeight: 1.3,
  },
  headerContact: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    fontSize: 11,
    color: '#bdc3c7',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactLabel: {
    fontWeight: 'bold',
    marginRight: 4,
  },
  content: {
    padding: 40,
    paddingTop: 30,
    flex: 1,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
    borderBottomWidth: 1.5,
    borderBottomColor: '#3498db',
    paddingBottom: 6,
    marginBottom: 18,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  entryContainer: {
    marginBottom: 16,
    paddingLeft: 0,
  },
  experienceContainer: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ecf0f1',
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  entryTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2c3e50',
    flex: 1,
    marginRight: 10,
  },
  entryDate: {
    fontSize: 10,
    color: '#7f8c8d',
    fontWeight: 'bold',
    backgroundColor: '#ecf0f1',
    padding: 3,
    paddingHorizontal: 8,
    borderRadius: 3,
  },
  entrySubtitle: {
    fontSize: 12,
    color: '#34495e',
    fontWeight: 600,
    marginBottom: 6,
    fontStyle: 'italic',
  },
  entryDescription: {
    fontSize: 11,
    color: '#5d6d7e',
    lineHeight: 1.5,
    textAlign: 'justify',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  skillItem: {
    fontSize: 11,
    color: '#2c3e50',
    backgroundColor: '#ecf0f1',
    padding: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 6,
    marginRight: 6,
    fontWeight: 500,
  },
  bulletPoint: {
    fontSize: 11,
    color: '#34495e',
    marginBottom: 4,
    paddingLeft: 12,
  },
  bulletSymbol: {
    color: '#3498db',
    fontWeight: 'bold',
    marginRight: 6,
  },
  achievementContainer: {
    marginBottom: 14,
    paddingLeft: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#3498db',
    paddingBottom: 8,
  },
  interestItem: {
    fontSize: 11,
    color: '#34495e',
    backgroundColor: '#f8f9fa',
    padding: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 4,
    marginRight: 6,
    fontWeight: 400,
  },
});

const CVPDFDocument = ({ 
  formData, 
  educationData, 
  practicleData, 
  skillsData, 
  achievementsData, 
  interestsData 
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerName}>
          {formData.name || "Your Name"}
        </Text>
        <Text style={styles.headerRole}>
          {formData.role || "Your Professional Role"}
        </Text>
        <View style={styles.headerContact}>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>EMAIL</Text>
            <Text>{formData.email || "your.email@example.com"}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>PHONE</Text>
            <Text>{formData.phone || "Your Phone Number"}</Text>
          </View>
        </View>
      </View>

      {/* Content - Single Column Layout */}
      <View style={styles.content}>
        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          {educationData.map((entry, index) => (
            <View key={index} style={styles.entryContainer}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>
                  {entry.school || "School Name"}
                </Text>
                <Text style={styles.entryDate}>
                  {entry.date || "Date"}
                </Text>
              </View>
              <Text style={styles.entrySubtitle}>
                {entry.title || "Degree/Title"}
              </Text>
            </View>
          ))}
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EXPERIENCE</Text>
          {practicleData.map((entry, index) => (
            <View key={index} style={styles.experienceContainer}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>
                  {entry.companyName || "Company Name"}
                </Text>
                <Text style={styles.entryDate}>
                  {entry.dateFrom || "Start Date"} - {entry.dateUntil || "End Date"}
                </Text>
              </View>
              <Text style={styles.entrySubtitle}>
                {entry.positionTitle || "Position Title"}
              </Text>
              <Text style={styles.entryDescription}>
                {entry.mainResponsibilities || "Your main responsibilities and achievements..."}
              </Text>
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SKILLS</Text>
          <View style={styles.skillsContainer}>
            {skillsData.map((entry, index) => (
              <Text key={index} style={styles.skillItem}>
                {entry.skillName || "Skill Name"}
              </Text>
            ))}
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ACHIEVEMENTS</Text>
          {achievementsData.map((entry, index) => (
            <View key={index} style={styles.achievementContainer}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>
                  {entry.title || "Achievement Title"}
                </Text>
                <Text style={styles.entryDate}>
                  {entry.date || "Date"}
                </Text>
              </View>
              <Text style={styles.entryDescription}>
                {entry.description || "Achievement description..."}
              </Text>
            </View>
          ))}
        </View>

        {/* Interests */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>INTERESTS</Text>
          <View style={styles.skillsContainer}>
            {interestsData.map((entry, index) => (
              <Text key={index} style={styles.interestItem}>
                {entry.interest || "Interest"}
                {entry.category && entry.category !== "Personal" && 
                  ` (${entry.category})`
                }
              </Text>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default CVPDFDocument;
