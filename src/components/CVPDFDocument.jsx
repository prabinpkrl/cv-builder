import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Create styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 0,
    fontFamily: 'Helvetica',
  },
  header: {
    backgroundColor: '#1f2937',
    color: '#ffffff',
    padding: 30,
    textAlign: 'center',
  },
  headerName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    letterSpacing: 1,
  },
  headerRole: {
    fontSize: 16,
    marginBottom: 12,
    color: '#d1d5db',
    fontWeight: 300,
  },
  headerContact: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    fontSize: 11,
    color: '#d1d5db',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    padding: 25,
    flex: 1,
  },
  twoColumns: {
    flexDirection: 'row',
    gap: 20,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1.2,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1f2937',
    borderBottomWidth: 2,
    borderBottomColor: '#d1d5db',
    paddingBottom: 4,
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  entryContainer: {
    marginBottom: 12,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  entryTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
    flex: 1,
  },
  entryDate: {
    fontSize: 10,
    color: '#6b7280',
    fontWeight: 500,
  },
  entrySubtitle: {
    fontSize: 11,
    color: '#374151',
    fontWeight: 500,
    marginBottom: 4,
  },
  entryDescription: {
    fontSize: 10,
    color: '#4b5563',
    lineHeight: 1.4,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillItem: {
    fontSize: 10,
    color: '#374151',
    marginBottom: 4,
    width: '48%',
  },
  bulletPoint: {
    fontSize: 10,
    color: '#374151',
    marginBottom: 3,
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
            <Text>Email: {formData.email || "your.email@example.com"}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text>Phone: {formData.phone || "Your Phone Number"}</Text>
          </View>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.twoColumns}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
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

            {/* Skills */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>SKILLS</Text>
              <View>
                {skillsData.map((entry, index) => (
                  <Text key={index} style={styles.bulletPoint}>
                    • {entry.skillName || "Skill Name"}
                  </Text>
                ))}
              </View>
            </View>

            {/* Achievements */}
            {achievementsData.some(entry => entry.title) && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>ACHIEVEMENTS</Text>
                {achievementsData.map((entry, index) => (
                  entry.title && (
                    <View key={index} style={styles.entryContainer}>
                      <View style={styles.entryHeader}>
                        <Text style={styles.entryTitle}>
                          {entry.title}
                        </Text>
                        <Text style={styles.entryDate}>
                          {entry.date || ""}
                        </Text>
                      </View>
                      <Text style={styles.entryDescription}>
                        {entry.description || ""}
                      </Text>
                    </View>
                  )
                ))}
              </View>
            )}

            {/* Interests */}
            {interestsData.some(entry => entry.interest) && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>INTERESTS</Text>
                <View>
                  {interestsData.map((entry, index) => (
                    entry.interest && (
                      <Text key={index} style={styles.bulletPoint}>
                        • {entry.interest}
                        {entry.category && entry.category !== "Personal" && 
                          ` (${entry.category})`
                        }
                      </Text>
                    )
                  ))}
                </View>
              </View>
            )}
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            {/* Experience */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>EXPERIENCE</Text>
              {practicleData.map((entry, index) => (
                <View key={index} style={styles.entryContainer}>
                  <View style={styles.entryHeader}>
                    <Text style={styles.entryTitle}>
                      {entry.companyName || "Company Name"}
                    </Text>
                    <Text style={styles.entryDate}>
                      {entry.dateFrom || "Start"} - {entry.dateUntil || "End"}
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
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default CVPDFDocument;
