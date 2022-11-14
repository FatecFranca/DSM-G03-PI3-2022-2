import { AnswerProvider } from "./AnswerContext"
import { AssessmentProvider } from "./AssessmentContext"
import { AuthProvider } from "./AuthContext"
import { QuestionProvider } from "./QuestionContex"
import { QuestionGroupProvider } from "./QuestionGroupContext"

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AssessmentProvider>
        <QuestionGroupProvider>
          <QuestionProvider>
            <AnswerProvider>
              {children}
            </AnswerProvider>
          </QuestionProvider>
        </QuestionGroupProvider>
      </AssessmentProvider>
    </AuthProvider>
  )
}

export default Providers
